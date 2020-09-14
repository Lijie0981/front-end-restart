/**
 * 
节流，就是拧紧水龙头让水少流一点，但是不是不让水流了。
在JS里典型的场景就是，图片懒加载监听页面的scoll事件，或者监听鼠标的mousemove事件。
这些事件对应的处理方法相当于水，
由于scroll和mousemove在鼠标移动的时候会被浏览器频繁的触发，
会导致对应的事件也会被频繁的触发（水流的太快了），
这样就会造成很大的浏览器资源开销，
而且好多中间的处理是不必要的，
这样就会造成浏览器卡顿的现象，影响性能。
这时候就需要节流，如何节流呢？我们无法做到让浏览器不去触发对应的事件，但是可以做到让处理事件的方法执行频率减少，从而减少对应的处理开销。
 */

function throttle(func, wait) {
  let lastTime = null;
  let timer = null;
  return function (...params) {
      let context = this;
      let now = Date.now();
      if (now - lastTime - wait > 0) {
          if (timer) {
              clearTimeout(timer);
              timer = null;
          }
          func.apply(context, params);
          lastTime = Date.now();
      } else if (!timer) {
        timer = setTimeout(() => {
            func.apply(context, params);
        }, wait);
      }
  }
}
