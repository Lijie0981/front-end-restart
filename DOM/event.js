// 1、onclick添加事件不能绑定多个事件，后面绑定的会覆盖前面的。
// 2、addEventListener方式，不支持低版本IE。
// 3、普通方式绑定事件后，不可以取消；addEventListener绑定后，可以用removeEvenListener 取消；
//addEventListiner(string:type,func:callback,bool:useCapture) useCapture:是否捕捉
// e.initEvent()	初始化新创建的 Event 对象的属性。
// e.preventDefault()	通知浏览器不要执行与事件关联的默认动作。
// e.stopPropagation()	不再派发事件。
// 事件处理对象
var EventUtil = {
  
    // 添加事件监听 
    add: function(element, type, callback){
      
     if(element.addEventListener){
      element.addEventListener(type, callback, false);
     } else if(element.attachEvent){
      element.attachEvent('on' + type, callback);
     } else {
      element['on' + type] = callback;
     }
    },
    
    // 移除事件监听
    remove: function(element, type, callback){
      
     if(element.removeEventListener){
      element.removeEventListener(type, callback, false);
     } else if(element.detachEvent){
      element.detachEvent('on' + type, callback);
     } else {
      element['on' + type] = null;
     }
    
    },
    
    // 跨浏览器获取 event 对象
    getEvent: function(event){
     
     return event ? event : window.event;
    },
    
    // 跨浏览器获取 target 属性
    getTarget: function(event){
      
     return event.target || event.srcElement;
    },
    
    // 阻止事件的默认行为
    preventDefault: function(event){
     
     if(event.preventDefault){
      event.preventDefault();
     } else {
      event.returnValue = false;
     }
    },
    
    // 阻止事件流或使用 cancelBubble
    stopPropagation: function(){
      
     if(event.stopPropagation){
      event.stopPropagation();
     } else {
      event.cancelBubble = true;
     }
    }
    
   };
    
   // 使用例子
   var at = document.getElementbyId('atemp');
   EventUtil.add(at, 'click', function(){
    
    console.log('被点击了');
    
    event = EventUtil.getEvent(event); // 跨浏览器获取 event 对象
    EventUtil.preventDefault(event); // 阻止默认事件
   });