module.exports = function Route(app, server){
	// this gets the socket.io module
	var io = require('socket.io').listen(server) 
	// root route to render the index.ejs view
	app.get('/', function(req, res) {
		res.render("index");
	})

	//listen to connection event from the client side
	io.sockets.on('connection', function (socket){

		//server listens to "posting_form" event
		let mycount = 0
	 	socket.on("posting_form", function (data){
			 mycount = (mycount + 1)

			//will emit the data to the client				
			io.emit('counter', {response: mycount});
				
		})
	})
};

