/* Check if an url is absolute.
 *
 * |Name  |Type   |Desc                   |
 * |------|-------|-----------------------|
 * |url   |string |Url to check           |
 * |return|boolean|True if url is absolute|
 */

/* example
 * isAbsoluteUrl('http://www.surunzi.com'); // -> true
 * isAbsoluteUrl('//www.surunzi.com'); // -> false
 * isAbsoluteUrl('surunzi.com'); // -> false
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function isAbsoluteUrl(url: string): boolean;
 */

exports = function(url) {
    return regAbsolute.test(url);
};

const regAbsolute = /^[a-z][a-z0-9+.-]*:/;
