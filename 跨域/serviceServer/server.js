const http = require('http');
var fs = require("fs");
// 创建一个 HTTP 服务器
const srv = http.createServer((req, res) => {
    var path = req.url;
    res.setHeader("Content-Type","applicant/json");
    res.setHeader("Access-Control-Allow-Origin","http://localhost:1337"); // 设置可以跨域
    res.setHeader("Access-Control-Allow-Methods","GET,POST,DELETE"); // 设置接受的方法
    res.setHeader("Access-Control-Allow-Headers","content-type"); // 设置接受的header
    res.setHeader("Access-Control-Max-Age","0"); // 设置 可以缓存的cros 不用每次都option
    if(path.indexOf("callback") != -1){
        let value = path.split("=")[1].split("&")[0]; //设置jsonp
        res.end(value+'({"msg":"server from 1339"})');
    }else{
        res.end('{"msg":"server from 1339"}');
    }
});
// 服务器正在运行
srv.listen(1339, '127.0.0.1', () => {
    console.log("runing")
});

function sendFile(res, path,statusCode = 200,header) {
    var path = process.cwd() + path;
    fs.readFile(path, function (err, stdout, stderr) {
        if (!err) {
            var data = stdout;
            var type = path.substr(path.lastIndexOf(".") + 1, path.length)
            header ==header ||{'Content-type': "text/" + type};
            res.writeHead(statusCode, header); //在这里设置文件类型，告诉浏览器解析方式  
            res.write(data);
        }
        res.end();
    })
}