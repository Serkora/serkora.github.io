var http = require('http');
var fs = require('fs');

console.log("__dirname: "+__dirname)

var page

fs.readFile("./index.html", {encoding: 'utf-8'}, function(err,data){
	page = data
})

// var page = fs.readFile("/Users/arichi/Documents/Git/Serkora.github.io/KITT/index.html")

console.log(page)

http.createServer(function(req, res) {  
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});
//   res.write(GL_TEST);
	res.write(page);
	res.end();
}).listen(8888, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8888');