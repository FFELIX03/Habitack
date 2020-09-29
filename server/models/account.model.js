const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

// List of columns for Employee schema
let accountSchema = new Schema({
    firstName:{
        type: String,
        default: ""
    },
    lastName: {
        type: String,
        default:""
    }, 
    password: String,
    email: String,
},{
    collection: 'accounts'
});

//hash password
accountSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//check if valid password
accountSchema.methods.validPass = function(password) {
    return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model('accounts', accountSchema);