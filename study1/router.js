function route(request, response, pathName, handler){
    if(handler[pathName]){
			handler[pathName](request, response);
		}else{
			response.writeHead(404, {"Content-Type": "text/plain"});
			response.write("404 not Found");
			response.end();
		}
}

exports.route = route;