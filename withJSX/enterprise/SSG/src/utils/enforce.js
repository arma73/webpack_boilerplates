/**
 * As github pages uses trailing slash, we need to provide it 
 * to canonicals for consistency between canonical href and 
 * final url served by github pages.
 * 
 * @param {string} url 
 */
export const enforceTrailingSlash = url => url.replace(/\/?$/, "/");
