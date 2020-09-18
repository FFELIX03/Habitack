// Importing important packages
const express = require('express');
 
// Using express and routes
const app = express();
const personRoute = express.Router();

// Person module which is required and imported
let personModel = require('../models/person.model');

// To Get List Of People
personRoute.route('/').get(function (req, res) {
personModel.find(function (err, pers) {
if (err) {
console.log(err);
}
else {
res.json(pers);
}
});
});

// To Add New Employee
personRoute.route('/addPerson').post(function (req, res) {
let person = new personModel(req.body);
person.save()
.then(game => {
res.status(200).json({ 'person': 'Person Added Successfully' });
})
.catch(err => {
res.status(400).send("Something Went Wrong");
});
});


/*Part of the tutorial that had to do with adding employees these are 
 *the additional routes
    // To Get Employee Details By Employee ID
    employeeRoute.route('/editEmployee/:id').get(function (req, res) {
    let id = req.params.id;
    employeeModel.findById(id, function (err, employee) {
    res.json(employee);
    });
    });

    // To Update The Employee Details
    employeeRoute.route('/updateEmployee/:id').post(function (req, res) {
    employeeModel.findById(req.params.id, function (err, employee) {
    if (!employee)
    return next(new Error('Unable To Find Employee With This Id'));
    else {
    employee.firstName = req.body.firstName;
    employee.lastName = req.body.lastName;
    employee.email = req.body.email;
    employee.phone = req.body.phone;

    employee.save().then(emp => {
    res.json('Employee Updated Successfully');
    })
    .catch(err => {
    res.status(400).send("Unable To Update Employee");
    });
    }
    });
    });

    // To Delete The Employee
    employeeRoute.route('/deleteEmployee/:id').get(function (req, res) {
    employeeModel.findByIdAndRemove({ _id: req.params.id }, function (err, employee) {
    if (err) res.json(err);
    else res.json('Employee Deleted Successfully');
    });
    });
*/
module.exports = personRoute;