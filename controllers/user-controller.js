const User = require ('../models/user-model');
const _ = require ('lodash');
const formidable = require ('formidable');
const fs = require ('fs');

exports.getAllUsers = (req, res) => {
    console.log("getallusers")
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

exports.updateUserProfile = ( req, res, next ) => {
    let form = new formidable.IncomingForm()
    form.keepExtenions = true
    form.parse (req, (err, fields, files) => {
        if(err) {
            return res.status(400).json({
                message: "Image could not be uploaded."
            })
        }
        let user = req.profile
        user= _.extend(user, fields)
        user.updated = Date.now()

        if(files.profileImage) {
            user.profileImage.data = fs.readFileSync(files.profileImage.path)
            user.profileImage.contentType = files.profileImage.type
        }

        user.save((err, result) => {
            if(err) {
                return res.status(400).json({
                    error: err
                })
            }
            user.hashed_password = undefined
            user.salt = undefined
            res.json(user);
        })

    })
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