/* Convert a function that returns a Promise to a function following the error-first callback style.
 *
 * |Name  |Type    |Desc                                            |
 * |------|--------|------------------------------------------------|
 * |fn    |function|Function that returns a Promise                 |
 * |return|function|Function following the error-fist callback style|
 */

/* example
 * function fn() {
 *     return new Promise(function (resolve, reject) {
 *         // ...
 *     });
 * }
 *
 * const cbFn = callbackify(fn);
 *
 * cbFn(function (err, value) {
 *     // ...
 * });
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function callbackify(fn: Function): Function;
 */

_('restArgs');

exports = function(fn) {
    return restArgs(function(args) {
        const cb = args.pop();

        fn.apply(this, args).then(
            function(value) {
                cb(null, value);
            },
            function(err) {
                if (err === null) err = new Error();
                cb(err);
            }
        );
    });
};
