var koa = require('koa');
var router = require('koa-router')();
var logger = require('koa-logger');
var app = koa();

app.use(logger());

router.get('/*', function (next) {
    this.body = this.request.url;
});

app
  .use(router.routes());

app.listen(3000, function () {
    console.log('server start at port: 3000');
});