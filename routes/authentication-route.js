// require express
const express = require('express');
// bring in controllers
const { signUp, getUsers, signIn, signOut } = require('../controllers/authentication-controller');
// bring in validator from validator/index.js
const { userSignUpValidator } = require ('../validator');

// use express router
const router = express.Router();

// hand over to controller
router.get('/users', getUsers);
// post to backend from frontend
// before creating the post, run middleware to validate user sign up fields meet specified criteria
router.post('/signup', userSignUpValidator, signUp);
router.post("/signin", signIn);
// sign out
router.get('/signout', signOut);
// make query to database and get user information


module.exports = router;

