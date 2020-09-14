// 防抖的作用是一段时间内，只执行一次函数，
// 在页面里，
// 有这种情况，假设有一个输入框，输入内容的同时会去后台查询对应的联想词，如果用户输入的同时，频繁的触发input事件，
// 然后频繁的向后台发送请求，那么服务器的压力会很大，而且直到用户输入完成时，之前的请求都应该是多余的。假设网络慢一点，后台返回的数据比较慢，
// 那么显示的联想词可能会出现频繁的变换，直到最后的一个请求返回。这个时候就可以在一定时间内监听是否再次输入，
//如果没有再次输入则认为本次输入完成，发送请求，否则就是判定用户仍在输入，不发送请求。
function debounce(func, wait = 50, immediate = true) {
  let timer, context, args;

  const later = () => {
    return setTimeout(() => {
      timer = null;
      if (!immediate) {
        func.apply(context, args);
        context = args = null;
      }
    }, wait);
  };
  return function (...params) {
      if(!timer) {
          timer = later();
          if (immediate) {
              func.apply(this, params);
          } else {
              context = this;
              args = params;
          }
      } else {
          clearTimeout(timer);
          timer = later();
      }
  }
}
