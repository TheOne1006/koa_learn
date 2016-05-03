var serve = require('koa-static');
var koa = require('koa');
var mount = require('koa-mount');
var app = koa();

// $ GET /package.json
// app.use(serve('.'));

// $ GET /hello.txt
// app.use(serve('test/fixtures'));

// or use absolute paths
// app.use(serve(__dirname + '/static', {index: 'static/'}));


/**
 * 模拟 express ,的静态资源挂在地址
 *
 * koa-mount 挂在模块
 */
app.use(mount('/static', serve(__dirname + '/static')));

app.listen('3000', function () {
    console.log('server start at port: 3000');
});