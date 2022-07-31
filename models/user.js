const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fname: String,
    lname: String,
    username: String,
    email: String,
    avatar: String
  },{
    versionKey: false // set to false then it wont create in mongodb
  });
  
  module.exports = mongoose.model('User', userSchema);