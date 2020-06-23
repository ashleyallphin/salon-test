// require express
const express = require('express');
// bring in controllers
const { signUp, signIn, signOut } = require('../controllers/authentication-controller');
const { getUserById } = require('../controllers/user-controller');
// const { getUserByUsername } = require('../controllers/user-controller');
// bring in validator from validator/index.js
const { userSignUpValidator } = require ('../validator');
// const { restrictRouteAccess } = require('../controllers/authentication-controller');


// use express router
const router = express.Router();

// hand over to controller
// router.get('/users', restrictRouteAccess, getSingleUsers);

// post to backend from frontend
// before creating the post, run middleware to validate user sign up fields meet specified criteria
// sign up page
router.post('/signup', userSignUpValidator, signUp);
// sign in page
router.post("/signin", signIn);
//sign out page
router.get('/signout', signOut);

// make query to database and get user information for any route containing :userId
router.param("userId", getUserById);
// router.param("userUsername", getUserByUsername);


module.exports = router;

