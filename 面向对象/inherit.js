// 继承的作用
// 1. 子类实例 访问到 自己的属性
// 2. 子类实例 访问到 子类构造函数的原型prototype
// 3. 子类实例 访问到 父类的属性
// 4. 子类实例 访问到 父类的原型
// 5. 子类实例 初始化 父类构造函数 与子类构造函数 
//组合继承
function Animal(name){
    this.name = name;
}
Animal.prototype.sayName = function(){ //可用 for in
    console.log(this.name);
}

function Cat (){ //组合继承
    Animal.call(this,'cat2'); //实现 5
    this.type = 'cat2';
}
Cat.prototype = new Animal(); //实现 2 4
Cat.prototype.sayType = function(){
    console.log(this.type);
}

var cat2Func = new Cat();
cat2Func.name;
cat2Func.type;
cat2Func.sayName(); //cat2
cat2Func.sayType(); //cat2

//存在以下关系
console.log(Cat.prototype.__proto__ = Animal.prototype); //true
console.log(Cat.prototype.constructor == Cat); // true
console.log(Cat.prototype.__proto__.constructor == Animal); //true
console.log(cat2Func instanceof Cat); //true
console.log(cat2Func instanceof Animal); //true

