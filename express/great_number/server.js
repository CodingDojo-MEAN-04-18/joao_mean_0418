const session = require('express-session');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();

// const sessionConfig  = {
//   saveUninitialized: true,
//   resave: false,
//   name: 'session',
//   secret: 'thisIsSuperSekret'
// };

app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve('assets')));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))
// app.use(session(sessionConfig));

// root route to render the index.ejs view
app.get('/', function(request, response) {
    // console.log('routing root', request);
    if(!request.session.guess) {
        request.session.guess = 0;
        request.session.curr_rdm = Math.floor(Math.random()*(100-1+1)+1);;
        console.log(request.session.curr_rdm);
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
    request.session.curr_rdm = Math.floor(Math.random()*(100-1+1)+1);
    console.log(request.session.curr_rdm);
    request.session.state = "initial";
    response.redirect('/')
});

app.listen(port, () => console.log(`listening on port ${ port } com grossa!`));