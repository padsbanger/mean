// config/passport.js

// load all the things we need
var LocalStrategy = require('passport-local').Strategy;

// load up the user model
var User = require('../config/user');

// expose this function to our app using module.exports
module.exports = function(passport) {

  // =========================================================================
  // passport session setup ==================================================
  // =========================================================================
  // required for persistent login sessions
  // passport needs ability to serialize and unserialize users out of session

  // used to serialize the user for the session
  passport.serializeUser(function(user, done) {
    if(!user) {
      done(null, false);
    } else {
      done(null, user._id);
    }
  });

  // used to deserialize the user
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
    // User.findById(id, function(err, user) {
    //   done(err, user);
    // });
  });

  // =========================================================================
  // LOCAL LOGIN =============================================================
  // =========================================================================
  // we are using named strategies since we have one for login and one for signup
  // by default, if there was no name, it would just be called 'local'

  var authenticate = function(req, res, next) {
    var auth = passport.authenticate('local', function(err, user) {
      if (err) {
        return next(err);
      }
      if (!user) {
        res.send({
          success: false
        });
      }
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }
        res.send({
          success: true,
          user: user
        });
      });
    });
    auth(req, res, next);
  };


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

};