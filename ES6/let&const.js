// let const是新引入的变量声明方法
//1. 暂时性死区 声明前使用报错 
//2. 不可重复声明
//3. const 不可再赋值
//4. 块级作用域
console.log(a); //ReferenceError a is not defined 未定义
let a = 100;

let b = 100;
let b = 100; //Identifier 'b' has already been declared
var b = 100;//Identifier 'b' has already been declared
//
const c = 100;
c = 101; //Assignment to constant variable. 
const obj = {};
obj.name = "can";//当定义引用类型的时候 可以添加属性。


{
    console.log(block);// block is not defined
    {
        let block = 'inside';
    }
}
