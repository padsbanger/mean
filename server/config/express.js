var express = require('express'),
  logger = require('morgan'),
  passport = require('passport'),
  bodyParser = require('body-parser'),
  session = require('express-session'),
  cookieParser = require('cookie-parser');

module.exports = function(app, config) {

  app.use(logger('dev'));
  app.use(express.static(config.rootPath + '/public/'));
  app.engine('html', require('ejs').renderFile);
  
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(session({
    secret: ' i am secret password',
    resave: true,
    saveUninitialized: true
  }));
  app.use(passport.initialize());
  app.use(passport.session());
};
