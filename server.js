var express = require('express'),
    logger = require('morgan'),
    mongoose = require('mongoose'),
    app = express();

app.use(logger('dev'));
app.use(express.static(__dirname + '/public/'));

app.engine('html', require('ejs').renderFile);

app.get('*', function(req, res) {
  res.render(__dirname+ '/public/index.html');
});

mongoose.connect('mongodb://localhost/mean');

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

User.findOne().exec(function(err, data) {
  mongoUser = data;

  console.log(mongoUser);
});

app.listen(1337);

// grunt-express needs this
module.exports = app;