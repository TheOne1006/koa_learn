'use strict';
var koa = require('koa');
var router = require('koa-router')();
var app = koa();

router.get('/', function *(next) {
    console.log(this.request.query);
    console.log(this.query);

    this.body = 'hello';
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
