// require express
const express = require('express');
// bring in controllers
const { getAllUsers, getUserByUsername, getUserById, getSingleUser, updateUserProfile, deleteUser } = require('../controllers/user-controller');
// bring in validator from validator/index.js
const { restrictRouteAccess } = require('../controllers/authentication-controller');

// use express router
const router = express.Router();

// hand over to controller (use express.method(URL, middleware, run function))
router.get("/users", restrictRouteAccess, getAllUsers);
router.get("/user/:userId", restrictRouteAccess, getSingleUser);
router.put("/user/:userId", restrictRouteAccess, updateUserProfile);
router.delete("/user/:userId", restrictRouteAccess, deleteUser);
// router.get("/user/:username", restrictRouteAccess,  getSingleUser);

//if these params are in the routes above, the following middle and method will fire
// (make query to database and get user information for any route containing :userId)
router.param("userId", getUserById);
// make query to database and get user information for any route containing :username
// router.param("username", restrictRouteAccess,  getUserByUsername);

module.exports = router;

