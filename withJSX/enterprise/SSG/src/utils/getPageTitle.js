import { findInContent } from "./findInContent";

/**
 * Retrieve the page title from the given `tree` based on the given `path`
 *
 * @param  {object} tree - Any node in the content tree
 * @param  {string} path - The pathname (aka route) for which to find a title
 * @return {string}      - The title specified by that page or a fallback
 */
export const getPageTitle = (tree, path) => {
    let page = findInContent(tree, item => item.url === path);
    let title;

    if (!page) {
        if (!path.endsWith("/")) path += "/";
        title = path.replace(/.*\/(.+)\//g, "$1");
        title = title.replace(/-/g, " ");
    } else if (path === "/") {
        title = page.title;
    } else if (path.includes("/printable")) {
        title = "Combined printable page | webpack";
    } else title = `${page.title} | webpack`;

    return title;
};
