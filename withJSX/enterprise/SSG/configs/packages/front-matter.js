/**
 * @package front-matter.
 * 
 * @description Extract meta data (front-matter) from documents.
 * Only extracting and parsing front matter from strings.
 * 
 * @example pass example.md
 *  ---
 *      title: Just hack'n
 *      description: Nothing to see here
 *      contributors:
 *        - pranshuchittora
 *  ---
 * @example output 
 *   {
 *     attributes: {
 *       title: "Just hack'n", 
 *       description: "Nothing to see here", 
 *       contributors: ["pranshuchittora"]
 *     }
 *   }
 * 
 * @param {string} content .md read file
 * 
 * @return {object} Return a content object with two properties:
 *  - content.attributes contains the extracted yaml attributes in json form
 *  - content.body contains the string contents below the yaml separators
 *  - content.bodyBegin contains the line number the body contents begins at
 *  - content.frontmatter contains the original yaml string contents
 */
const frontMatter = content => require("front-matter")(content);

module.exports = frontMatter;
