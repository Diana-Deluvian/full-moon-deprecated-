const mongoose = require('mongoose');

mongoose.Promise = Promise;

mongoose.connect("mongodb+srv://" + process.env.DB_USERNAME + ":" + process.env.DB_PASSWORD + "@personal-data.telw9.mongodb.net/" + process.env.DB + "?retryWrites=truegodb://127.0.0.1:27017/details", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once("open", function() {
    console.log("Connection with MongoDB was successful");
  });

module.exports.User = require('./user.js');
module.exports.Message = require('./message.js');