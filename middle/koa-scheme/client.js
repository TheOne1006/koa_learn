'use strict';

var request = require('request');

console.log('signup');

request
    .post({url:'http://127.0.0.1:3000/signup', form: {name:'23'}, headers: {version: 2}}, function(err, response, body){
        console.log(body);
        // body.name : Not exist
    });

request
    .post({url:'http://127.0.0.1:3000/signup', form: {name:'str',password:'11233', age: 18}, headers: {version: 2}}, function(err, response, body){
        console.log(body);
    });
