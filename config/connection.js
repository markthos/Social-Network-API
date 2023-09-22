const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/socialNetworkDB');
console.log('connected to socialNetworkDB');
module.exports = mongoose.connection;