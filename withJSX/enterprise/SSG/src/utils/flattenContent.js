/**
 * Deep flatten the given `tree`s child nodes
 *
 * @param  {object} tree - Any node in the content tree
 * @return {array}       - A flattened list of leaf node descendants
 */
export const flattenContent = tree => {
    if (tree.children) {
        return tree.children.reduce((flat, item) => flat.concat(
            Array.isArray(item.children) ? flattenContent(item) : item
        ), []);
    } else return [];
};
