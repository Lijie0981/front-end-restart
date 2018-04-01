const http = require('http');
var fs = require("fs");
// 创建一个 HTTP 服务器
const srv = http.createServer((req, res) => {
    var path = req.url;
    console.log("path1: " + path)
    if (path == "/") {
        path = "/public/index.html";
        sendFile(res, path);
    }else if(path == "/script.js"){
        path = "/public/script.js";
        let header = {
            'Content-type': "text/javascript",
            'Cache-control':'max-age=200'
        };
        sendFile(res, path,200,header);
    }
    
});
// 服务器正在运行
srv.listen(1337, '127.0.0.1', () => {
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