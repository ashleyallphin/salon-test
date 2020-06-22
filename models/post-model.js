const mongoose = require('mongoose')

// mongoose create schema method
const postSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String
    }
});

module.exports = mongoose.model("Post", postSchema)