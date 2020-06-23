// require express
const express = require('express');
// bring in controllers
const { getPosts, createPost} = require('../controllers/post-controller');
// bring in validator from validator/index.js
const { createPostValidator } = require ('../validator');
const { restrictRouteAccess } = require('../controllers/authentication-controller');


// use express router
const router = express.Router();

// hand over to controller
router.get('/', restrictRouteAccess, getPosts);
// post to backend from frontend
// before creating the post, run middleware to validate post meets specified criteria
router.post('/post', createPostValidator, createPost)


module.exports = router;

