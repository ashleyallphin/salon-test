// require express
const express = require('express');
// bring in controllers
const { getAllUsers, getUserByUsername, getUserById, getSingleUser, updateUserProfile, deleteUser } = require('../controllers/user-controller');
// bring in validator from validator/index.js
const { restrictedRouteAccess } = require('../controllers/authentication-controller');

// use express router
const router = express.Router();

// hand over to controller (use express.method(URL, middleware, run function))
router.get("/users", restrictedRouteAccess, getAllUsers);
router.get("/user/:userId", restrictedRouteAccess, getSingleUser);
router.put("/user/:userId", restrictedRouteAccess, updateUserProfile);
router.delete("/user/:userId", restrictedRouteAccess, deleteUser);
// router.get("/user/:username", restrictedRouteAccess,  getSingleUser);

//if these params are in the routes above, the following middle and method will fire
// (make query to database and get user information for any route containing :userId)
router.param("userId", getUserById);
// make query to database and get user information for any route containing :username
// router.param("username", restrictedRouteAccess,  getUserByUsername);

module.exports = router;

