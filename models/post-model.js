const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema;

// mongoose create schema method
const postSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    // build relationship between the post schema and the user schema
    postedBy: {
        type: ObjectId,
        ref: "User"
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Post", postSchema)