// 关于箭头函数的特点
// 1. 函数内部this 继承父级的this call  apply 无效
// 2. 不能使用arguments 获得参数
// 3. 没有原型
// 4. 不能作为构造函数 因为this 和 没有原型
// 5. 函数体内只有一句表达式 默认作为 return 的值
let arrow = (...args) => {
    console.log(args);
}
arrow(1, 2, [3, 5]); //1,2,[3,5]

let obj = {
    name: 'test',
    sayName: function () { //
        setTimeout(() => {
            console.log(this); //沿用了sayName的this
        }, 1000)
    }
}
obj.sayName();
obj.sayName.call(window); //通过改变父级this的值 来改变 箭头函数内部的值