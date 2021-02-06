/**
 * @package remark
 * 
 * @description
 * unified processor to parse and serialize Markdown. Built on micromark. 
 * Powered by plugins. Part of the unified collective.
 * - API by unified
 * - Parses Markdown to a syntax tree with remark-parse
 * - mdast syntax tree
 * - Plugins transform the tree
 * - Serializes syntax trees to Markdown with remark-stringify
 */
const remark = () => require("remark")();

module.exports = remark;
