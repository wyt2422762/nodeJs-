var http = require("http");
var url = require("url");

function startServer(route, handler){
	http.createServer(function(request, response) {
		
		var pathName = url.parse(request.url).pathname;
		console.log("pathName = " + pathName);
		
		route(request, response, pathName, handler);
		
	}).listen(8888);
	console.log("server started !");
}

exports.startServer = startServer;