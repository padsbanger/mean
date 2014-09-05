var express = require('express'),
  mongoose = require('mongoose'),
  app = express(),
  env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
  config = require('./server/config/config')[env],
  passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;


require('./server/config/express')(app, config);

require('./server/config/db')(config);

var User = mongoose.model('User');

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({
      username: username
    }).exec(function(err, user) {
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  }
));

passport.serializeUser(function(user, done) {
  if (user) {
    done(null, user._id);
  }
});

passport.deserializeUser(function(id, done) {
  User.findOne({
    _id: id
  }).exec(function(err, user) {
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  });
});


require('./server/config/routes')(app);



app.listen(config.port);

// grunt-express needs this
module.exports = app;