/**
 * @package remark-gfm
 * 
 * @description Configures remark so that it can parse and serialize GFM (autolink literals, 
 * strikethrough, tables, tasklists).
 * 
 * @example pass
 *  # GFM
 *  ## Autolink literals
 *  www.example.com, https://example.com, and [mail].
 *  ## Strikethrough
 *  ~one~ or ~~two~~ tildes.
 *  ## Table
 *  | a | b  |  c |  d  |
 *  | - | :- | -: | :-: |
 *  ## Tasklist
 *  * [ ] to do
 *  * [x] done
 * 
 * @example output
 *  <h1>GFM</h1>
 *  <h2>Autolink literals</h2>
 *  <p><a href="http://www.example.com">www.example.com</a>, <a href="https://example.com">https://example.com</a>, and <a href="mailto:[mail]">[mail]</a>.</p>
 *  <h2>Strikethrough</h2>
 *  <p><del>one</del> or <del>two</del> tildes.</p>
 *  <h2>Table</h2>
 *  <table>
 *  <thead>
 *  <tr>
 *  <th>a</th>
 *  <th align="left">b</th>
 *  <th align="right">c</th>
 *  <th align="center">d</th>
 *  </tr>
 *  </thead>
 *  </table>
 *  <h2>Tasklist</h2>
 *  <ul class="contains-task-list">
 *  <li class="task-list-item"><input type="checkbox" disabled> to do</li>
 *  <li class="task-list-item"><input type="checkbox" checked disabled> done</li>
 *  </ul>
 */
const remarkGFM = () => require("remark-gfm");

module.exports = remarkGFM;
