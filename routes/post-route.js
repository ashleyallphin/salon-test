// require express
const express = require('express');
// bring in controllers
const { getPosts, createPost} = require('../controllers/post-controller');
// bring in validator from validator/index.js
const { createPostValidator } = require ('../validator');
const { restrictRouteAccess } = require('../controllers/authentication-controller');
const { getUserById } = require('../controllers/user-controller');


// use express router
const router = express.Router();

// hand over to controller
// ============== see posts without authroization
    // router.get('/', getPosts);
// ============== can only see posts WITH AUTHORIZATION
    router.get('/', restrictRouteAccess, getPosts);
// post to backend from frontend
// before creating the post, run middleware to validate post meets specified criteria
router.post('/post', restrictRouteAccess, createPostValidator, createPost)
// make query to database and get user information for any route containing :userId
router.param("userId", getUserById);

module.exports = router;

