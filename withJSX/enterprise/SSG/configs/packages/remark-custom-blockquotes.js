/**
 * @package remark-custom-blockquotes
 * 
 * @description Encapsulates a blockquote with a defined classname.
 * mapping (required) Object
 * 
 * @example pass
 *  T> My blockquote text.
 * 
 * @example output
 *  <blockquote class="tip">
 *    <p>My blockquote text</p>
 *  </blockquote>
 */
module.exports = () => [
    require("remark-custom-blockquotes"),
    {
        "mapping": {
            "T>": "tip",
            "W>": "warning",
            "?>": "todo"
        }
    }
];
