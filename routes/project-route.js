// require express
const express = require('express');
// bring in controllers
const { getPosts, createPost, postsByUser, postsById, isPoster, deletePost, updatePost } = require('../controllers/post-controller');
// bring in validator from validator/index.js
const { createPostValidator } = require ('../validator');
const { restrictedRouteAccess } = require('../controllers/authentication-controller');
const { getUserById } = require('../controllers/user-controller');


// use express router
const router = express.Router();


// HAND ROUTES OVER TO CONTROLLER
    // ============== see posts without authroization
        // router.get('/', getPosts);
    // ============== can only see posts WITH authorization
        router.get('/', restrictedRouteAccess, getPosts);
router.get("/posts/by/:userId", restrictedRouteAccess, postsByUser);
router.delete("/post/:postId", restrictedRouteAccess, isPoster, deletePost)
router.put("/post/:postId", restrictedRouteAccess, isPoster, updatePost)

// post to backend from frontend
// before creating the post, run middleware to validate post meets specified criteria
    // make sure to run validator after post is created
router.post('/post/new/:userId', restrictedRouteAccess, createPost, createPostValidator)
// make query to database and get user information for any route containing :userId
router.param("userId", getUserById);
// make query to database and get user information for any route containing :postId
router.param("postId", postsById);



module.exports = router;

