const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// List of columns for Employee schema
let accountSchema = new Schema({
    _id: Number,
    firstName: String,
    lastName: String, 
    password: String,
    email: String,
    phoneNumber: String,
},{
    collection: 'accounts'
});

//hash password
accountSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, brypt.genSaltSync(8), null);
};

//check if valid password
accountSchema.methods.validPass = function(password) {
    return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model('accounts', accountSchema);