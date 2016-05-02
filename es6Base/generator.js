'use strict';
/**
 * generator [ˈdʒɛnəˌretɚ] 生成器
 * yield     [jild]        生产
 *
 * 1. 基本写法与使用
 */

/**
 * 基本
 * 1. 通过 function* 实现
 * - 可以写成 `function* funName`, `function *funName`, `function * funName`
 *
 * 2. 返回一个遍历器,通过 .next() 方法获取输出
 * 3. 每次调用 .next 方法,将执行到下一个 yield 或者是 return 语句
 *
 * 4. next 方法参数, next 的第一个参数可以作为 yield 语句的返回值
 *
 * 5. for ... of 循环, 循环 generator 遍历
 * - 只遍历 yield 语句,不会返回 return 语句的返回
 * - 不用再执行 next()的 遍历
 *
 * 6. yield* 在 Generator 函数内部 调用 离哪一个 Generator 函数, 那么对目标函数的调用使用 yield*
 */

function* helloWorld () {
    yield 'Hello ';
    return 'World';
}

var bar = helloWorld();
// 此时获取 返回结果
console.log(bar);

// 执行 next
var step1 = bar.next();
console.log(step1);
// { value: 'Hello', done: false }
console.log(bar);

// 再次执行 next
var step2 = bar.next();
console.log(step2);
// { value: 'World', done: true }
console.log(bar);

// 再次执行 next
var step3 = bar.next();
console.log(step3);
//{ value: undefined, done: true }
console.log(bar);

/**
 * next 参数, 返回
 */

function* foo() {
    var is_true = true;
    for(var i = 0; is_true ; i++) {
        var reset = yield i;
        if(reset) {
            i = -1;
        }
    }
}

var g = foo();

var v1 = g.next();
console.log(v1);
var v2 = g.next();
console.log(v2);
var v3 = g.next();
console.log(v3);
var v4 = g.next(true);
console.log(v4);


/**
 * for ... of
 */

function* loopThroughtInt () {
    for (let i = 0; i < 10; i++) {
        yield i;
    }
    return 100;
}

for (let v of loopThroughtInt()) {
    console.log(v); // output 0...9
}

function* objects () {
    yield 'cat';
    yield 'dog';
    yield 'duck';
}

function* say () {
    yield* objects();
    yield 'say';
}

var res = say();

console.log(res.next()); // cat
console.log(res.next()); // dog
console.log(res.next()); // duck
console.log(res.next()); // say
console.log(res.next()); // undefined
