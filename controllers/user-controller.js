const jwt = require('jsonwebtoken');
require('dotenv').config();
const cookieParser = require ('cookie-parser');
// import user model
const User = require ("../models/user-model");
// protect routes -- routes can only be accessed by signed in users
const expressJwt = require('express-jwt');

exports.getUsers = (req, res) => {

    // get users from database
    const users = User.find()
    // this select method is optional -- if left out, ALL of the values will be returned
    .select("_id firstName lastName email username unencryptedPassword password hashed_password")
    .then((users) => {
        // status 200 is default, so we can leave it out in the future
        // when key and value are the same, we can leave it as one word ('users')
        res.status(200).json({ users: users })
    })
    .catch(err => console.log(err))
};

// method to sign up a new user
exports.signUp = async (req, res) => {
    // if there's an error, return the message that the email address is taken
    const emailExists = await User.findOne({ email: req.body.email})
    const usernameExists = await User.findOne({ username: req.body.username})

    if (emailExists) return res.status(403).json({ 
        error: "This email address is already assigned to a registered user."
    })
    if (usernameExists) return res.status(403).json({
        error: "A fellow artist is already using this username."
    })
    //if no error, create user
    const user = await new User (req.body)
    await user.save()
        res.status(200).json({ message: "You've joined Salon! Please log in to your account."})
};

exports.signIn = (req, res) => {
    // find the user based on the email username
        const {username, password} = req.body
    // if error, user is not found
        User.findOne({ username }, (err, user) => {
        // handle errors
            // if username is not found
            if (err || !user) {
                return res.status(401).json({
                    error: "Username not found."
                })
            }
            // if user is found, but username and password combo do not match
            if(!user.authenticateSignInCredentials(password)) {
                return res.status(401).json({
                error: "Invalid username and password."
            })
        }
        // generate a token with userID and jwt secret
            // create token using cookie-parser and JWT_SECRET
            const token = jwt.sign({ _id: user._id}, process.env.JWT_SECRET);
            // add the token in the cookie with expiry date
            res.cookie("token", token, {expire: new Date() + 10000})
            // return response with user and token to front end
            const { _id, username, firstName, lastName, email } = user;
            // return response to front end
            return res.json({message: "Sign in successful.", token, user: { _id, username, firstName, lastName, password, email } });
    });
};

exports.signOut = (req, res) => {
    // clear cookie to sign out
    res.clearCookie("token")
    return res.json({ message: 'Sign out successful.'})
};

exports.restrictRouteAccess = expressJwt({
    secret: process.env.JWT_SECRET
});
