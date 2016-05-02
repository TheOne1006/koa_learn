'use strict';

function* gen(a) {
    console.log(a);
    var b = yield a;
    console.log(b); //3
    var c = yield b;
    console.log(c); // 4
    yield c;
}
var g = gen(1);
console.log(g.next(2));//{ value: 1, done: false }
console.log(g.next(3));//{ value: 3, done: false }
console.log(g.next(4));//{ value: 4, done: false }
console.log(g.next());//{ value: undefined, done: true }
