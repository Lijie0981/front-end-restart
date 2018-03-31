//实现一个bind
//bind 的作用
//1. 实现this的指向 并返回一个新的函数， 函数体内的this指向绑定的值。
//2. 可以在使用bind的时候传递参数，实现类似默认参数的功能
//3. 实现构造函数的功能 改变this的指向以及 原型链的衍生
Function.prototype.bind2 = function (context) {

    if (typeof this !== "function") {
      throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);
    var fNOP = function () {};

    var fbound = function () {
        self.apply(this instanceof self ? this : context, args.concat(Array.prototype.slice.call(arguments)));
    }

    fNOP.prototype = this.prototype;
    fbound.prototype = new fNOP();

    return fbound;
}
