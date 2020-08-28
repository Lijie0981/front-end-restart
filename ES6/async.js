//   async || await 其实是promise的语法糖
async function a () {
    let a = new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log('timeout');
            resolve(123);
        }, 1000);
    });
    console.log('before await')
    a = await a;
    console.log('after await', a)
    return a;
}
// console.log(a ());
a();