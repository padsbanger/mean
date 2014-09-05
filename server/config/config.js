var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    db: 'mongodb://localhost/mean',
    rootPath: rootPath,
    port: process.env.PORT || 3030
  },
  production: {
    db: 'mongodb://test:test@ds035310.mongolab.com:35310/mean',
    rootPath: rootPath,
    port: process.env.PORT || 80
  }
};