module.exports = function Route(app){
	const session = require('express-session');
	const sessionConfig  = {
		saveUninitialized: true,
		resave: false,
		name: 'session',
		secret: 'thisIsSuperSekret'
	  };
	// root route to render the index.ejs view
	// root route to render the index.ejs view
	app.get('/', function(request, response) {
		// console.log('routing root', request);
		request.session.guess = request.body.guess;
		if(!request.session.guess) {
			request.session.guess = 0;
			request.session.curr_rdm = randomIntFromInterval(1,100);
			request.session.state = "initial";
		}
		response.render('index', {curr: request.session.curr_rdm, state: request.session.state});
	});


	// route to process guess
	app.post('/process', function (request, response){
		request.session.guess = request.body.guess;
		if(request.session.guess < request.session.curr_rdm) {
			request.session.state = "Too low";
		} else if (request.session.guess > request.session.curr_rdm) {
			request.session.state = "Too high";
		} else {
			request.session.state = "correct";
		}
		response.redirect('/')
	});

	// route to process playagain
	app.post('/playagain', function (request, response){
		request.session.guess = 0;
		request.session.curr_rdm = randomIntFromInterval(1,100);
		request.session.state = "initial";
		response.redirect('/')
	});
};