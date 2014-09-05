modules.exports = function(app) {
  app.get('*', function(req, res) {
    res.render(__dirname + '/public/index.html');
  });
};