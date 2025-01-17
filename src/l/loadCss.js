/* Inject link tag into page with given href value.
 *
 * |Name|Type    |Desc           |
 * |----|--------|---------------|
 * |src |string  |Style source   |
 * |[cb]|function|Onload callback|
 */

/* example
 * loadCss('style.css', function (isLoaded) {
 *     // Do something...
 * });
 */

/* module
 * env: browser
 * test: browser
 */

/* typescript
 * export declare function loadCss(src: string, cb?: Function): void;
 */

_('noop');

exports = function(src, cb) {
    cb = cb || noop;

    const link = document.createElement('link');

    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.onerror = function() {
        cb(false);
    };
    link.onload = function() {
        cb(true);
    };
    link.href = src;

    document.head.appendChild(link);
};
