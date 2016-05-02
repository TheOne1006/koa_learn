'use strict';

var path = require('path');
var app = require('koa')();
var wait = require('co-wait');
var render = require('co-ejs');

var locals = {
    version: '1.0.0',
    now: function () {
        return new Date();
    },
    ip: function *() {
        yield wait(1000);
        return this.ip;
    },
    getSum: function *(a, b) {
        yield wait(1000);
        return a + b;
    },
    callback: function() {
        return function(cb) {
            setTimeout(function (){
                cb(null, '<p> callback </p>');
            },2000);
        };
    },
    callbackGen: function () {
        return function *() {
            yield wait(3000);
            return '<p>callback Gen</p>';
        };
    },
    doNothing: function () {
        console.log('this will not print');
    }
};

var filters = {
    format: function (time) {
        return time.getFullYear() + '-' + (time.getMonth() + 1) + ' - ' + time.getDate();
    }
};

app.use(render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'layout',
    viewExt: 'html',
    cache: true,
    debug: true,
    locals: locals,
    filters: filters
}));

app.use(function *(){
    console.time('time');
    yield this.render('content', {
        users: [{name: 'John'},
            {name: 'Jack'},
            {name: 'Tom'}]
    });
    console.timeEnd('time');
});

app.listen(3000, function () {
    console.log('listening on 3000');
});











// - - -
