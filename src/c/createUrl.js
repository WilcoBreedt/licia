/* CreateObjectURL wrapper.
 *
 * |Name   |Type                  |Desc                                |
 * |-------|----------------------|------------------------------------|
 * |data   |File Blob string array|Url data                            |
 * |[opts] |object                |Used when data is not a File or Blob|
 * |return |string                |Blob url                            |
 */

/* example
 * createUrl('test', {type: 'text/plain'}); // -> Blob url
 * createUrl(['test', 'test']);
 * createUrl(new Blob([]));
 * createUrl(new File(['test'], 'test.txt'));
 */

/* module
 * env: browser
 * test: browser
 */

/* typescript
 * export declare namespace createUrl {
 *     interface IOptions {
 *         type?: string
 *     }
 * }
 * export declare function createUrl(data: any, options?: createUrl.IOptions): string;
 */

_('defaults isBlob isFile Blob toArr');

exports = function(data, opts) {
    opts = opts || {};
    defaults(opts, defOpts);

    if (!isBlob(data) && !isFile(data)) {
        data = new Blob(toArr(data), opts);
    }

    return URL.createObjectURL(data);
};

const defOpts = {
    type: 'text/plain'
};
