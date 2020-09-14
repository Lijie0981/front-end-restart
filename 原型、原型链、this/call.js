/*
 * @Author: Lijie 
 * @Date: 2018-03-31 21:05:05 
 * @Last Modified by: Lijie
 * @Last Modified time: 2018-03-31 21:15:41
 */
// 实现一个call
// 1. 完成this的指向 将原函数作为 传入的对象的属性
// 2. 完成参数的传递
// 3. 函数运行，并记录返回值
// 4. 删除 添加的 属性
// 5. 返回值

Function.prototype.call2 = function (obj){
    var context = obj || window;
    context.fn = this;
    var args = [].slice.call(arguments,1);
    var res = eval('context.fn('+args+')');
    delete context.fn;
    return res;
}

//测试例子
var msg = 'from origin';
function test(time){
    var i = 0,
        time = time || 5;
    for(;i<time;i++){
        console.log(this.msg);
    }
}
test(6); // 6次 from origin
test.call2({"msg":'from call2'},5); //5 次 from call2
test.call({"msg":'from call'},5);// 5 次 from call