'use strict';

var koa = require('koa');
var bodyParser = require('koa-bodyparser');
var router = require('koa-router')();
var scheme = require('koa-scheme');

var app = koa();

app.use(bodyParser());
app.use(scheme(__dirname + '/scheme', {debug: true}));

router.get('/', function(){
    console.log('get server');
    this.body = '123';
});

router.post('/signup', function* () {
    console.log( 'passowrd : %s ', this.request.body.password );
    this.body = {
        user: {
            id: this.request.body.password
        }
    };
});

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000, function () {
      console.log('server start at port: 3000');
  });
