const fs   = require('fs');
const path = require('path');

module.exports = function(request, response) {

	const appName = "content_module"

	const splitURL = request.url.split('/'),
	fileType   = splitURL[1], // Set of characters after the first /
	fileNew    = splitURL[2];
  
	if (fileType == "images" || fileType == "styles"){
	  file = fileNew
	}
  
	if (fileType == "images") {
	  // First argument uses string interpolation
	  fs.readFile(`${appName}/${fileType}/${file}`, function(err, contents){
		if (err) { return (serve404(response)); }
		response.writeHead(200, {'Content-Type': 'image/jpg'});
		response.write(contents);
		response.end();
	  });
	}
	else if (fileType == "styles") {
	  // First argument uses string interpolation
	  fs.readFile(`${appName}/${fileType}/${file}.css`, 'utf8', function(err, contents){
		if (err) { return (serve404(response)); }
		response.writeHead(200, {'Content-Type': 'text/css'});
		response.write(contents);
		response.end();
		});
	  }
	else {
		// First argument uses string interpolation
	  fs.readFile(`${appName}/html${request.url}.html`, 'utf8', function(err, contents){
		console.log(`${appName}/html${request.url}.html`);
		if (err) { return (serve404(response)); }
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(contents);
		response.end();
	  });
	}
  
  function serve404(response){
	response.writeHead(404);
	response.end("File not found!");
	console.log("404 File not found!");
  }
};