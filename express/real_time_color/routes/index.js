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
		
	 	socket.on("green", function (data){
			 color = "green"
		
			 //will emit the data to the client				
			io.emit('color', {response: color});
		 })

		socket.on("blue", function (data){
		color = "blue"

			//will emit the data to the client				
			io.emit('color', {response: color});
		})

		socket.on("pink", function (data){
			color = "pink"

			//will emit the data to the client				
			io.emit('color', {response: color});
		})

	})

};

