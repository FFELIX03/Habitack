// Importing important packages
const express = require('express');
 
// Using express and routes
const app = express();
const accountRoute = express.Router();

// Person module which is required and imported
let accountModel = require('../models/account.model');

// To Get List Of People
accountRoute.route('/signup').post(function (req, res) {
const newUser = new accountModel();
newUser.email = req.body.email.toLowerCase();
newUser.password = newUser.generateHash(req.body.password);

accountModel.find({email: req.body.email}, function (err, acc) {
if (err) {
    return res.send({
        success: false,
        message: 'Server Error'
    });
}
else if (acc.length > 0) {
    return res.send({
        success: false,
        message:"account already exists"
    });
}
//});
else{
    newUser.save((err,user) => {
        if (err) {
            console.log(err)
            return res.send({
                success: false,
                message: 'Error with server'
            });
        }else {
        return res.send({
            success: true,
           message: 'User signed up' 
        });
    }        
    })
}
})
});


module.exports = accountRoute;