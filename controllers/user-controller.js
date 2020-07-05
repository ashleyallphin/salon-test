const User = require ('../models/user-model');
// requre lodash
const _ = require ('lodash');

exports.getAllUsers = (req, res) => {
    User.find((err, users) => {
        if(err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.json(users);
    });
};


exports.getUserById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json ({
                error: "User id not found."
            });
        }
        req.profile = user; //adds profile object in request with user info
        next();
    });
};

exports.getUserByUsername = (req, res, next, username) => {
    User.findOne({ username }).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json ({
                error: "Username not found."
            });
        }
        req.profile = user; //adds profile object in request with user info
        next();
    });
};

exports.isAuthorized = (req, res, next) => {
    // authorized if three conditions are met
    const authorized = req.profile && req.auth && req.profile_id === req.auth._id
    // if not authorized, return with unauthroized error 403
    if(!authorized) {
        return res.status(403).json({
            error: "User is not authroized to perform this action."
        })
    };
};

exports.getSingleUser = (req, res) => {
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;
    return res.json(req.profile);
};

exports.updateUserProfile = (req, res, next) => {
    // extract user information from the profile
    let user = req.profile
    // lodash method: extend
    user = _.extend(user, req.body) // changes the source object
    user.updated = Date.now();
    // save user database
    user.save((err) => {
        if(err) {
            return res.status(400).json({
                error: "User is not authroized to perform this action."
            })
        };
        user.hashed_password = undefined;
        user.salt = undefined;
        res.json({ user: user });
    });
};

exports.deleteUser = (req, res, next) => {
    let user = req.profile;
    user.remove((err, user) => {
        if(err) {
            return res.status(400).json({ 
                error: err
            })
        }
        user.hashed_password = undefined;
        user.salt = undefined;
        res.json({ 
            message: "User account deleted successfully." });
    })
};