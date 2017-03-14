var exec = require("child_process").exec;
var qs = require("querystring");

function start(response,postData){
	console.log("Request handler 'start' was called");

	/*exec("find /",
		{timeout:20000,maxBuffer:20000*1024},
		function(error,stdout,stderr){
		response.writeHead(200,{"Content-Type":"text/plain"});
		response.end(stdout);
	})*/
	var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200,{"Content-Type":"text/html"});
	response.end(body);
}

function upload(response,postData){
	console.log("Request handler 'upload' was called");
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.end("You've sent : " + postData);
}

exports.start = start;
exports.upload = upload;