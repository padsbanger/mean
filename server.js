var express = require('express');
var logger = require('morgan');
var app = express();

app.use(logger());
app.use(express.static(__dirname + '/public/'));

app.engine('html', require('ejs').renderFile);

app.get('*', function(req, res) {
  res.render('index.html');
});

app.listen(1337);