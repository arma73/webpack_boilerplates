/**
 * @package remark-extract-anchors
 * 
 * @description Extract anchors from a MD file.
 * Anchors are h1, h2, h3, h4, h5, h6 tags or their Markdown respective representation.
 * 
 * @example pass
 *  # Head
 *  ## Bundle it
 *  ### Awesome
 * 
 * @example output
 *  { title: "Head", id: "head", level: 1 },
 *  { title: "Bundle it", id: "bundle-it", level: 2 },
 *  { title: "Awesome", id: "awesome", level: 3}
 */
const remarkExtractAnchors = () => require("remark-extract-anchors");

module.exports = remarkExtractAnchors;
