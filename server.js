// VARIABLES
// ================================================
// import dependencies
// colors terminal output
const colors = require('colors');
const express = require ('express');
const bodyParser = require ('body-parser');
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
const postRoutes = require("./routes/post-route")
const userRoutes = require("./routes/user-route")


// DATABASE
// ================================================
// If deployed, use the deployed database. Otherwise, use the 'salon' database on localhost.
var db = process.env.MONGODB_URI || "mongodb://localhost/salondb";

mongoose.connect(db)
.then(() => console.log(`Successfully connected to MongoDB.`.brightMagenta + 
`\n-----------------------------------------------------`.white))
mongoose.connection.on('error', err =>
console.log(`Error connectiong to MongoDB: ${err.message}`.red));

// MIDDLEWARE
// ================================================
// morgan middleware - posts methods to the terminal
app.use(morgan('dev'));
// express get method for getting routes
app.use(bodyParser.json());
// validator for content posts
app.use(expressValidator());
// ues getPosts function from routes/post-route.js
app.use("/", postRoutes);
app.use("/signup", userRoutes);


// LISTEN
// ================================================
//set up port -- deployed port or localhost 8080
var PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`\nApp listening on `.brightCyan + `http://localhost:${PORT}`.brightYellow);
});