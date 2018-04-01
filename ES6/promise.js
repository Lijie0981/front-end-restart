// promise的作用
// 1. 回调函数再 then或catch中执行
// 2. 三种状态 pending resolve reject 只可pending -> resolve || pending -> reject
// 3. 使用 new Promise((resolve,reject)=>{}) 新建一个promise 实例
let promise = new Promise((resolve,reject)=>{
    console.log('now run promise inside');
    setInterval(()=>{
        resolve('now run promise reslove inside');
    },1000);
});

promise.then((msg)=>{console.log(msg)}); 
//now run promise inside
// 1s later 
// now run promise reslove inside

//实现一个 promise
function Promise2(func){

}