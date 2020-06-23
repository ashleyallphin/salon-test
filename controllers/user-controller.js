const User = require ("../models/user-model");

exports.getUserById = (req, res, next, id) => {
    User.findById(id).then.execute((err, user) => {
        if (err || !user) {
            return res.status(400).json ({
                error: "User not found."
            })
        };
        req.profile = user //adds profile object in request with user info
        next();
        });
};

exports.isAuthorized = (req, res, next) => {
    // authorized if three conditions are met
    const authorized = req.profile && req.auth && req.profile_id === req.auth._id
    // if not authorized, return with unauthroized error 403
    if(!authorized) {
        return res.status(403).json({
            error: "User is not authroized to perform this"
        })
    }
}