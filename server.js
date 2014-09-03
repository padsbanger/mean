var express = require('express'),
  logger = require('morgan'),
  mongoose = require('mongoose'),
  app = express();

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

app.use(logger('dev'));
app.use(express.static(__dirname + '/public/'));

app.engine('html', require('ejs').renderFile);

app.get('*', function(req, res) {
  res.render(__dirname + '/public/index.html');
});

if (env === 'development') {
  mongoose.connect('mongodb://localhost/mean');
  console.log('you are in dev mode');
} else {
  mongoose.connect('mongodb://test:test@ds035310.mongolab.com:35310/mean');
}

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'error'));

db.once('open', function callback() {
  console.log('connected');
});

var userSchema = mongoose.Schema({
  id: Number,
  name: String
});

var User = mongoose.model('User', userSchema);

var mongoUser;

User.find().exec(function(err, data) {
  mongoUser = data;

  console.log(mongoUser);
});

var port = process.env.PORT || 3030;

app.listen(port);

// grunt-express needs this
module.exports = app;