const  http = require("http");
const  url = require("url"); 

function start(route,handle) {
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;

		if(pathname !== "/favicon.ico"){
			

			console.log("Request for" + pathname + "received");
			response.writeHead(200,{"Content-type":"text/plain"});

			var content = route(handle,pathname);

			response.end(content);
		}	
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started");
}

exports.start = start;

