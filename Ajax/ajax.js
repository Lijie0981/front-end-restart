//原生的ajax
//1. 新建一个 XHR对象 存在兼容性问题 老版本的 Internet Explorer （IE5 和 IE6）使用 ActiveX 对象
//2. open() 声明一个请求 方法，url get方法时 data 卸载url上
//3. 设置请求头 setRequestHeader()
//4. send() 发送一个请求 post方法时 传入 data
//5. readyState 改变时 会触发 onreadystatechange事件 
    //0: 请求未初始化
    // 1: 服务器连接已建立
    // 2: 请求已接收
    // 3: 请求处理中
    // 4: 请求已完成，且响应已就绪
//5. 当 readyState == 4 的时候 再判断此时 http的状态码 status 执行回调事件
function ajax_method(url,data,method,success) {
    // 异步对象
    var ajax = (window.XMLHttpRequest)?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");;

    // get 跟post  需要分别写不同的代码
    if (method=='get') {
        // get请求
        if (data) {
            // 如果有值
            url+='?';
            url+=data;
        }else{

        }
        // 设置 方法 以及 url
        ajax.open(method,url);

        // send即可
        ajax.send();
    }else{
        // post请求
        // post请求 url 是不需要改变
        ajax.open(method,url);

        // 需要设置请求报文
        ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");

        // 判断data send发送数据
        if (data) {
            // 如果有值 从send发送
            ajax.send(data);
        }else{
            // 木有值 直接发送即可
            ajax.send();
        }
    }

    // 注册事件
    ajax.onreadystatechange = function () {
        // 在事件中 获取数据 并修改界面显示
        if (ajax.readyState==4&&ajax.status==200) {
            // console.log(ajax.responseText);

            // 将 数据 让 外面可以使用
            // return ajax.responseText;

            // 当 onreadystatechange 调用时 说明 数据回来了
            // ajax.responseText;

            // 如果说 外面可以传入一个 function 作为参数 success
            success(ajax.responseText);
        }
    }

}
