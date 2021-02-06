const fs = require("fs");
const frontMatter = require("../packages/front-matter");
const remark = require("../packages/remark");
const slug = require("../packages/remark-slug");
const remarkExtractAnchors = require("../packages/remark-extract-anchors");
const remarkHtml = require("../packages/remark-html");
const remarkFrontMatter = require("../packages/remark-frontmatter");
const gfm = require("../packages/remark-gfm");
const emoji = require("../packages/remark-emoji");
const { normalizeAbsoluteToRelative } = require("./normalizePath");

/**
 * @example return
 *  {
 *    path: 'C:/My/Software/Projects/blog/src/content/example.md',
 *    name: 'example.md',
 *    size: 78,
 *    extension: '.md',
 *    type: 'file',
 *    url: '/example/',
 *    anchors: [ { title: 'Test anchor', id: 'test-anchor', level: 3 } ],
 *    title: 'Example',
 *    sort: 4,
 *    contributors: [ 'alex' ]
 *  }
 * @param {*} tree 
 * @param {*} options 
 */
const enhance = (tree, options) => {
    tree.url = normalizeAbsoluteToRelative(tree.path, tree.extension, options.dir);

    if (tree.type === "file") {
        let anchors = [];
        // write the contents of the file to the variable content.
        let content = fs.readFileSync(tree.path, "utf8");
        let { attributes } = frontMatter(content);

        // remove underscore from fetched files
        if (tree.name[0] === "_") {
            tree.name = tree.name.replace("_", "");
            tree.url = tree.url.replace("_", "");
        }

        remark()
            .use(slug())
            .use(remarkFrontMatter())
            .use(gfm())
            .use(emoji())
            .use(remarkExtractAnchors(), { anchors, "levels": 3 })
            .use(remarkHtml())
            .process(content, err => {
                if (err) {
                    throw err;
                }
            });

        tree.anchors = anchors;

        Object.assign(tree, {
            "path": tree.path.replace(/\\/g, "/")
        }, attributes);
    }
};

const filter = () => true;

const sort = (a, b) => {
    let group1 = (a.group || "").toLowerCase();
    let group2 = (b.group || "").toLowerCase();

    if (group1 < group2) return -1;
    if (group1 > group2) return 1;
    if (a.sort && b.sort) return a.sort - b.sort;

    let aTitle = (a.title || "").toLowerCase();
    let bTitle = (b.title || "").toLowerCase();
    if (aTitle < bTitle) return -1;
    if (aTitle > bTitle) return 1;

    return 0;
};

function restructure(item, options) {
    enhance(item, options);

    if (item.children) {
        item.children.forEach(child => restructure(child, options));
        item.children.filter(filter);
        item.children.sort(sort);
    }

    return item;
}

module.exports = {
    enhance,
    filter,
    restructure,
    sort,
};
