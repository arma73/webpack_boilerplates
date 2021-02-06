/**
 * @package remark-emoji
 * 
 * @description This is a remark plugin to replace :emoji: to real UTF-8 emojis in text.
 * 
 * @example pass
 *  I :heart: remark-emoji
 *  Also Emoticons are supported :-) (if enabled)
 * 
 * @example output
 *  I ❤️ remark-emoji
 *  Also Emoticons are supported 😃 (if enabled)
 */
const remarkEmoji = () => require("remark-emoji");

module.exports = remarkEmoji;
