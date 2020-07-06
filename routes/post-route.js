// require express
const express = require('express');
// bring in post controllers
const
    {
    getPosts,
    createPost,
    postsByUser,
    postsById,
    isPoster,
    updatePost,
    deletePost
    // projectImage,
    // singlePost,
    // comment,
    // uncomment,
    // updateComment
    } = require('../controllers/post-controller');
// bring in protected routes authentication controller
const { restrictedRouteAccess } = require('../controllers/authentication-controller');
// bring in user controllers
const { getUserById, getUserByUsername } = require('../controllers/user-controller');
// bring in validator from validator/index.js
const { createPostValidator } = require ('../validator');

// use express router
const router = express.Router();

// HAND ROUTES OVER TO CONTROLLER
// post to backend from frontend
// before creating the post, run middleware to validate post meets specified criteria  -- then run validator after post is created
router.get('/posts', restrictedRouteAccess, getPosts);
router.post('/post/new/:username', restrictedRouteAccess, createPost, createPostValidator)
router.get("/posts/by/:username", restrictedRouteAccess, postsByUser);
router.put('/post/:postId', restrictedRouteAccess, isPoster, updatePost);
router.delete("/post/:postId", restrictedRouteAccess, isPoster, deletePost);
// router.get('/post/photo/:postId', photo);


// // comments
// router.put('/post/comment', restrictedRouteAccess, comment);
// router.put('/post/uncomment', restrictedRouteAccess, uncomment);
// router.put('/post/updatecomment', restrictedRouteAccess, updateComment);

// make query to database and get user information for any route containing :username
router.param("username", getUserByUsername);
router.param("userId", getUserById);
// make query to database and get user information for any route containing :postId
router.param("postId", postsById);


module.exports = router;

