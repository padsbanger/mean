var mongoose = require('mongoose');

module.exports = function(config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'error'));
  db.once('open', function callback() {
    console.log('connected to mongoose db');
  });

  var userSchema = mongoose.Schema({
    userName: String
  });

  var User = mongoose.model('User', userSchema);

  User.find({}).exec(function(err, collection) {
    if (collection.length === 0) {
      User.create({
        userName: 'Strielok'
      }, {
        userName: 'Artyom'
      }, {
        userName: 'Michaszek'
      });
    }
  });

};