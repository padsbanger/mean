var express = require('express'),
    logger = require('morgan');

module.exports = function(app, config) {

  app.use(logger('dev'));
  app.use(express.static(config.rootPath + '/public/'));
  app.engine('html', require('ejs').renderFile);
};