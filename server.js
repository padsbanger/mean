// server.js

// set up ======================================================================
// get all the tools we need
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var config = require('./server/config/config.js')(env);

// configuration ===============================================================
mongoose.connect(config.db); // connect to our database

require('./server/config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

// required for passport
app.use(session({
  secret: 'abc'
}));
app.use(passport.initialize());
app.use(passport.session());

// routes ======================================================================
require('./server/config/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
 app.listen(config.port, function() {
  console.log('Runnin on ' + config.port);
});

module.exports = app;