var server = require("./server");
var router = require("./router");
var requestHandler = require("./requestHandler");

//配置路由
var handler = {};
handler["/"] = requestHandler.index;
handler["/handler1"] = requestHandler.handler1;
handler["/handler2"] = requestHandler.handler2;
handler["/readFileAsync"] = requestHandler.readFileAsync;
handler["/writeFileAsync"] = requestHandler.writeFileAsync;

server.startServer(router.route, handler);