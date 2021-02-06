/**
 * @package remark-slug
 * 
 * @description Add slugs to headings in HTML.
 * 
 * @example pass
 *  # Lorem ipsum 😪
 *  ## dolor—sit—amet
 *  ### consectetur &amp; adipisicing
 *  #### elit
 *  ##### elit
 * 
 * @example output
 *  <h1 id="lorem-ipsum-">Lorem ipsum 😪</h1>
 *  <h2 id="dolorsitamet">dolor—sit—amet</h2>
 *  <h3 id="consectetur--adipisicing">consectetur &#x26; adipisicing</h3>
 *  <h4 id="elit">elit</h4>
 *  <h5 id="elit-1">elit</h5>
 */
const remarkSlug = () => require("remark-slug");

module.exports = remarkSlug;
