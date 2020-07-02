// VARIABLES
// ================================================
// import dependencies
// colors terminal output
// const colors = require('colors');
const color = require('colors-cli/toxic');
const express = require ('express');
const bodyParser = require ('body-parser');
const cookieParser = require ('cookie-parser');
const morgan = require ("morgan");
const mongoose = require("mongoose");
    //to circumvent deprecation warnings
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useUnifiedTopology', true);
    mongoose.set('useCreateIndex', true);
const expressValidator = require ('express-validator');
const dotenv = require ('dotenv');
// invoke config method for dotenv
dotenv.config();

// invoke express
const app = express();
// bring in routes
const postRoutes = require("./routes/post-route");
const authRoutes = require("./routes/authentication-route");
const userRoutes = require("./routes/user-route");


// DATABASE
// ================================================
// If deployed, use the deployed database. Otherwise, use the 'salon' database on localhost.
var db = process.env.MONGODB_URI

mongoose.connect(db)
.then(() => console.log(`Successfully connected to MongoDB.`.x206 + 
`\n-----------------------------------------------------`.x255))
mongoose.connection.on('error', err =>
console.log(`Error connectiong to MongoDB: ${err.message}`.x196));


// MIDDLEWARE
// ================================================
// morgan middleware - posts methods to the terminal
app.use(morgan('dev'));
// express get method for getting routes
app.use(bodyParser.json());
app.use(cookieParser());
// validator for content posts
app.use(expressValidator());
// ues getPosts function from routes/post-route.js
app.use(postRoutes);
app.use(userRoutes);
app.use(authRoutes);
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
    res.status(401).json('error: Please sign in to Salon to access this content.');
    }
    });

    
// LISTEN
// ================================================
//set up port -- deployed port or localhost 8080
var PORT = 8080
app.listen(PORT, () => {
    console.log(`\nApp listening on `.x81 + `http://localhost:${PORT}`.x226.underline);
});