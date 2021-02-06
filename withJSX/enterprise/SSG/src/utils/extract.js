import { flattenContent } from "./flattenContent";

/**
 * Get top-level sections
 *
 * @param  {object} tree - Any node in the content tree
 * @return {array}       - Immediate children of the given `tree` that are directories
 */
export const extractSections = tree => tree.children.filter(item => item.type === "directory");

// TODO: add descriptions
export const extractCurrentSection = (sections, pathname) =>
    sections.find(({ url }) => pathname.startsWith(url));

/**
 * Get all markdown pages
 *
 * @param  {object} tree - Any node in the content tree
 * @return {array}       - All markdown descendants of the given `tree`
 */
export const extractPages = tree =>
    flattenContent(tree).filter(item => item.extension === ".md" || item.extension === ".mdx");

export const extractArticles = listArticles => listArticles.map(({ content, desc, title, url }) => ({
    content,
    desc,
    title,
    url
}));
