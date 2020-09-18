const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// List of columns for Employee schema
let Person = new Schema({
firstName: {
    type: String
},

},{
collection: 'people'
});

module.exports = mongoose.model('Person', Person);