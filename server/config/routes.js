var passport = require('passport');

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('./public/index');
  });

  // process the signup form
  app.post('/signup', passport.authenticate('local-signup', function(req, res) {}));

  app.post('/login', function(req, res, next) {
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
  });

  // =====================================
  // LOGOUT ==============================
  // =====================================
  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}