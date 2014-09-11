module.exports = function(env) {
  var config = {};
  if (env === 'development') {
    config = {
      db : 'mongodb://localhost/mean',
      port : process.env.PORT || 3000
    };
    return config;
  } else {
    config = {
      db : 'mongodb://test:test@ds035310.mongolab.com:35310/mean',
      port : process.env.PORT || 80
    };
    return config;
  }
};