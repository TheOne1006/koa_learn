'use strict';
var koa = require('koa');
var router = require('koa-router')();
var app = koa();


router.get('/', function* (next) {
  console.log('home');
  this.body = '<h1>HOME</h1>';
});

router.get('/2', function* (next) {
  console.log('/2');
  this.body = '<h2>22</h2>';
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);