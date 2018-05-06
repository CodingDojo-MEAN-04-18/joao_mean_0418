// const session = require('express-session');
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
// app.use(session(sessionConfig));

require('./routes/index.js')(app);

app.listen(port, () => console.log(`listening on port ${ port } com grossa!`));