var mongoose = require('mongoose');

module.exports = function(config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'error'));
  db.once('open', function callback() {
    console.log('connected to mongoose db');
  });

  var userSchema = mongoose.Schema({
    username: String
  });

  var User = mongoose.model('User', userSchema);

  User.find({}).exec(function(err, collection) {
    if (collection.length === 0) {
      User.create({
        username: 'Strielok'
      }, {
        username: 'Artyom'
      }, {
        username: 'Michaszek'
      });
      console.log('No schema found, new created');
    }
  });

};