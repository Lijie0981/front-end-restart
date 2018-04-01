// es6 中的类 
class Animal {
    static sayStatic(){
        console.log('static');
    };//不能被继承
    constructor (name){ //未声明 自添加 实现 constructor 和 __proto__ 的赋值
        this.name = name;
    }

    sayName(){ //定义在Animal的原型上 不可枚举 不可用 object.key for in
        console.log(this.name);
    }
}

//类似于
let Animal2 = function (name){
    this.name = name;
}
Animal2.prototype.sayName = function(){ //可用 for in
    console.log(this.name);
}
let animal = new Animal("class");
let animal2 = new Animal2('function');
animal.name;
animal.sayName(); //class

animal2.name;
animal2.sayName();//function

//class 的继承
class Cat extends Animal {
    constructor(){
        super('cat');
        this.type = 'cat';
    }
    sayType (){
        console.log(this.type);
    }
}
let cat = new Cat();
cat.type;
cat.name;
cat.sayName();
cat.sayType;
cat.sayStatic();  // cat.sayStatic is not a function
function Cat2 (){ //组合继承
    Animal2.call(this,'cat2');
    this.type = 'cat2';
}
Cat2.prototype = new Animal2();
Cat2.prototype.sayType = function(){
    console.log(this.type);
}
var cat2Func = new Cat2();
cat2Func.name;
cat2Func.type;
cat2Func.sayName(); //cat2
cat2Func.sayType(); //cat2

