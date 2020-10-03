//index.js

const functions = require("firebase-functions")
const app = require("express")()

const { 
  getAllGoals,
} = require("./APIs/goals")

const {
  loginUser,
  signUpUser
} = require("./APIs/users")


// Goals
app.get("/goals", getAllGoals)

// Users
app.post('/login', loginUser);
app.post('/signup', signUpUser);

exports.api = functions.https.onRequest(app)
