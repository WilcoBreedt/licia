## CN

获取有效的 TCP 端口。

|参数名|类型|说明|
|-----|----|---|
|[port]|number array|首选端口|
|[host]|string|地址|
|返回值|Promise|有效端口|

如果首选端口无法使用，将会返回一个有效的随机端口。