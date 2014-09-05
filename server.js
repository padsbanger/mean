var express = require('express'),
  app = express(),
  env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
  config = require('./server/config/config')[env];

require('./server/config/express')(app, config);

require('./server/config/db')(config);

require('./server/config/db')(app);

app.listen(config.port);

// grunt-express needs this
module.exports = app;