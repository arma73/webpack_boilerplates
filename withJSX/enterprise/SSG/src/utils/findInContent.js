import { flattenContent } from "./flattenContent";

/**
 * Find an item within the given `tree`
 *
 * @param  {object}   tree - Any node in the content tree
 * @param  {function} test - A callback to find any leaf node in the given `tree`
 * @return {object}        - The first leaf node that passes the `test`
 */
export const findInContent = (tree, test) => {
    let list = flattenContent(tree);

    return list.find(test);
};
