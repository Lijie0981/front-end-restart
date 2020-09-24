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
class Promise2 {
  state = 'pending';
  callbacks = [];

  constructor(fn) {
      if (typeof fn !== 'function') {
          throw new Error('我只接受函数');
      }
      fn(this.resolve.bind(this), this.reject.bind(this));
  }

  resolve(result) {
      if (this.state !== 'pending') return;
      this.state = 'fulfilled';
      nextTick(() => {
          // 遍历 callbacks, 调用所有的 handle[0]
          this.callbacks.forEach(handle => {
              if (typeof handle[0] === 'function') {
                  handle[0].call(undefined, result);
              }
          });
      });
  }

  reject(reason) {
      if (this.state !== 'pending') return;
      this.state = 'rejected';
      nextTick(() => {
          // 遍历 callbacks, 调用所有的 handle[0]
          this.callbacks.forEach(handle => {
              if (typeof handle[1] === 'function') {
                  handle[1].call(undefined, reason);
              }
          });
      });
  }


  then(succeed?, fail?) {
      const handle = [];
      if (typeof succeed === 'function') {
          handle[0] = succeed;
      }
      if (typeof fail === 'function') {
          handle[1] = fail;
      }
      this.callbacks.push(handle);
      return this;
  }

}


export default Promise2;



function nextTick(fn) {
  if (process !== undefined && typeof process.nextTick === 'function') {
      return process.nextTick(fn);
  } else {
      // 实现浏览器上的nextTick
      var counter = 1;
      var observer = new MutationObserver(fn);
      var textNode = document.createTextNode(String(counter));

      observer.observe(textNode, {
          characterData: true
      });
      counter += 1;
      textNode.data = String(counter);
  }
}
