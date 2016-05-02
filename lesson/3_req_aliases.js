'use strict';
var koa = require('koa');
var app = koa();


app.use(function *(next) {
    // 等价于 request
    console.log(this.header);
    console.log(this.method);
    console.log(this.url); // 带参数
    console.log(this.path); // 不带参数

    /**
     * @var json 参数对象
     */
    console.log(this.query);

   /**
    * @var string url参数
    */
    console.log(this.querystring);

   /**
    * @var string host
    * localhost:3000
    */
    console.log(this.host);

    console.log(this.hostname);


    console.log(this.fresh);
    console.log(this.stale);


    console.log(this.socket);

    // 协议
    console.log(this.protocol);

    // 安全
    console.log(this.secure);
    console.log(this.ip);
    console.log(this.ips);

    // this.subdomains
    // this.is()
    // this.accepts()
    // this.acceptsEncodings()
    // this.acceptsCharsets()
    // this.acceptsLanguages()
    // this.get()




    // http://localhost:3000/dakl/dadkf?kdja=123



    yield next;
});

app.use(function *(){

    // 以下访问器和别名与 Response 等价：

    this.body = 'Hello World';
});

app.listen(3000);
