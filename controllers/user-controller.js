// import user model
const User = require ("../models/user-model");

exports.getUsers = (req, res) => {

    // get users from database
    const users = User.find()
    // this select method is optional -- if left out, ALL of the values will be returned
    .select("_id firstName lastName email username password hashed_password")
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
        res.status(200).json({ message: "You've joined Salon! Please log in to your account."});
}
