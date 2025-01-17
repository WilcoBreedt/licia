/* Convert string into bytes.
 *
 * |Name  |Type  |Desc             |
 * |------|------|-----------------|
 * |str   |string|String to convert|
 * |return|array |Bytes array      |
 */

/* example
 * strToBytes('licia'); // -> [108, 105, 99, 105, 97]
 */

/* module
 * env: all
 * test: all
 * since: 1.1.0
 */

/* typescript
 * export declare function strToBytes(str: string): number[];
 */

exports = function(str) {
    const bytes = [];

    for (let i = 0, len = str.length; i < len; i++) {
        bytes.push(str.charCodeAt(i) & 0xff);
    }

    return bytes;
};
