//实现一个new
/**
 * 1. 实现原型链的赋值
 * 2. 参数传递
 * 3. 执行函数，并返回值
 * 4. 返回结果
 */
function objectCreate() {
    var obj = new Object(); //新建一个对象
    var func = [].shift.call(arguments); //获得构造函数
    obj.__proto__ = func.prototype; //原型链的继承
    var result = func.apply(obj, arguments); //运行构造函数 改变this的指向 存储返回值
    return (typeof result == "object") ? result : obj; //返回值判断是否是 对象
}
/**
 * 
 * 
 * @param {any} name 实例的名字
 */
function Person(name) {
    this.name = name;
}
Person.prototype.sex = "girl";
var p1 = new Person("lijie"); //使用 new 创建一个 实例
var p2 = objectCreate(Person, "wo"); //使用objectCreate