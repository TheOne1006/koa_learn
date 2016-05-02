'use strict';
/**
 * 1. 使用 class 关键字申明
 * 2. 使用 class 表达式申明
 *
 * 3. 构造函数 constructor 可以给 class 定义一个构造函数
 * 4. 通过 getter 和 setter 方法给类增加属性, 如果只有 getter 那么它是一个只读属性
 *
 * 5. 继承
 * 6. 静态成员函数
 *
 */
class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width  = width;
    }
    get name() {
        return '多边形';
    }
}

var Polygon2 = class {
    //构造函数
    constructor(name) {
        this._name = name;
    }
    /**
     * 主要是要区分 this._name 和 this.name 的区别。因为我们定义了 name 的读写器，而没有定义 _name 的读写器，所以访问这两个属性的结果是不同的。
     * 但是要注意一点，不要这样写：
     * set name(name) {
     *  this.name = name;
     * }
     * 因为给 this.name 赋值的时候会调用 set name ，这样会导致无限递归直到栈溢出。
     */
    get name() {
        console.log('_name:'+this._name);
        return this._name.toUpperCase();
    }
    set name(name) {
        this._name = name;
    }


};

var p1 = new Polygon(100, 200);
console.log(p1.height);
console.log(p1.width);
// p1.name = 'noChange'; //TypeError
console.log(p1.name);

var p2 = new Polygon2('bar');
console.log(p2.name);
p2.name = 'p2';
console.log(p2.name);
console.log(p2._name);
console.log(p2);




/**
 * class 的继承
 */

class Animal {
    constructor(name) {
        this.name = name;
    }
    say() {
        console.log(this.name + ' saying');
    }
}

class Cat extends Animal {
    say() {
        // 调用父类的方法
        super.say();
        console.log(' -- this a cat');
    }
}

var cat = new Cat('Tom');
cat.say();

/**
 * 使用static 关键字定义静态成员函数
 */

class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    static distance(a ,b){
        let dx = a.x - b.x;
        let dy = a.y - b.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

var distance = Point.distance({x:0,y:0}, {x:3,y:4});
console.log('勾三股四弦五');
console.log(distance);// 5
