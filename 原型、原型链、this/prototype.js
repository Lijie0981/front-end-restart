// 关于原型 原型链 有三个关键词 __proto__ prototype constructor
// __proto__ 实例 才拥有的 指向 构造函数的 prototype
// constructor 构造函数的prototype的constructor 指向 构造函数 ， 实例的constructor指向构造函数
// prototype 函数拥有这个值 表示拓展的对象。
// 实例 通过 构造函数 创建

function Foo(){}//定义一个构造函数
Foo.prototype.add = function(){}//定义Foo.prototype上的add属性
var f1 = new Foo();//新建一个Foo的实例
console.log(f1.__proto__ === Foo.prototype) //true 
//实例发f1的__proto__ 指向了构造函数Foo的prototype
console.log(Foo.prototype.constructor === Foo) //true
//构造函数Foo的prototype的constructor 指向构造函数Foo
console.log(f1.constructor === Foo) //true
//实例f1的constructor是Foo构造函数
console.log(Foo.constructor === Function) //true
//因为Foo是Function对象的一个实例，所以Foo.constructor指向Function
console.log(Foo.prototype.__proto__ === Object.prototype)//true
//因为Foo.prototype是一个Object的一个实例，所以Foo.prototype.__proto__指向Object.prototype
console.log(Object.prototype.__proto__ === null)//true
//而ECMAScript规定Object.prototype.__proto__指向null