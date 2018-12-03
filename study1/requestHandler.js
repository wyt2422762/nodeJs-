var fs = require("fs");

function index(request, response) {
    console.log("handler1");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("index");
    response.end();
}


function handler1(request, response) {
    console.log("handler1");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("handler1");
    response.end();
}

function handler2(request, response) {
    console.log("handler2");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("handler2");
    response.end();
}

// 异步读取文件
function readFileAsync(request, response) {
    fs.readFile('fileTest.txt', function (err, data) {
        if (err) {
            response.writeHead(500, {"Content-Type": "text/plain;charset=utf-8"});
            response.write("读取文件发生错误");
            response.end();
        }
        response.writeHead(200, {"Content-Type": "text/plain;charset=utf-8"});
        response.write(data);
        response.end();
        console.log("异步读取: " + data.toString());
    });
}

//异步写入文件
function writeFileAsync(request, response) {

    fs.writeFile("fileTest.txt", "我是通过写入的文件内容！", function (error) {
        if (error) {
            console.log("写入文件失败");
        }
        response.writeHead(200, {"Content-Type": "text/plain;charset=utf-8"});
        response.write("写入文件成功");
        response.end();
        console.log("写入文件成功");
    });
}

exports.index = index;
exports.handler1 = handler1;
exports.handler2 = handler2;
exports.readFileAsync = readFileAsync;
exports.writeFileAsync = writeFileAsync;