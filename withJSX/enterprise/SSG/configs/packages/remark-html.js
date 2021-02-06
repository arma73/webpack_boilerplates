/**
 * @package remark-html
 * 
 * @description Serialize Markdown as HTML.
 * 
 * @example pass
 *  # Hello & World
 *  > A block quote.
 *  * Some _emphasis_, **importance**, and `code`.
 * 
 * @example output
 *  <h1>Hello &#x26; World</h1>
 *  <blockquote>
 *  <p>A block quote.</p>
 *  </blockquote>
 *  <ul>
 *  <li>Some <em>emphasis</em>, <strong>importance</strong>, and <code>code</code>.</li>
 *  </ul>
 */
const remarkHtml = () => require("remark-html");

module.exports = remarkHtml;
