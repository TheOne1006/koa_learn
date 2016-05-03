/**
 * 响应压缩中间件
 * 
 */
var compress = require('koa-compress');
var koa = require('koa');

var app = koa();
app.use(compress({
    filter: function (content_type) {
        return /text/i.test(content_type);
    },
    threshold: 2048
}));

