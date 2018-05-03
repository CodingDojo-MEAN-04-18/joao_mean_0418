// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
  // see what URL the clients are requesting:
  console.log('client request URL: ', request.url);
    
  const appName = "cars_and_cats"

  let file;
  
    switch (request.url) {
      case "/":
        file = `${appName}/html/cars.html`
        break;
      case "/cars":
        file = `${appName}/html/cars.html`
        break;
      case "/cars/new":
        file = `${appName}/html/new.html`
        break;
      case "/cats":
      file = `${appName}/html/cats.html`
      break;
      
      default:
        file = null;
        break;
  }
  
  // this is how we do routing:
  
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
    fs.readFile(`${appName}/${fileType}/${file}`, 'utf8', function(err, contents){
      if (err) { return (serve404(response)); }
      response.writeHead(200, {'Content-Type': 'text/css'});
      response.write(contents);
      response.end();
      });
    }
  else {
      // First argument uses string interpolation
    fs.readFile(`${file}`, 'utf8', function(err, contents){
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

});
// tell your server which port to run on
server.listen(7077);
// print to terminal window 
console.log("Running in localhost at port 7077 com grossa!!");
