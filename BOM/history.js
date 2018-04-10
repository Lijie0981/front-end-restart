console.log(window.history);
//state 
// __proto__
    //back(num) 向后
    // forward( num ) 向前
    //go(num) 向前或向后
    // length 历史记录
    // pushState(obj:state object, string:title,string:url) 改变 length
    //replaceState(obj:state object, string:title,string:url) 不改变length
    $(document).ready(function(e) {    //监听回退
        var counter = 0;  
        if (window.history && window.history.pushState) {  
                         $(window).on('popstate', function () {  
                                        window.history.pushState('forward', null, '#');  
                                        window.history.forward(1);  
                                      alert("不可回退");  
                            });  
          }  

          window.history.pushState('forward', null, '#'); //在IE中必须得有这两行
          window.history.forward(1);  
});  
//都不发送请求
