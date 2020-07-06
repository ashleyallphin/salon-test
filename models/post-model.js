const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema;

// mongoose create schema method
const postSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true,
    },
    projectImage: {
        data: Buffer,
        contentType: String
    },
    body: {
        type: String,
        required: true
    },
    projectMedium: {
        type: String,
        required: true
    },
    projectTags: {
        contentType: String
    },
    projectYear: {
        contentType: Number,
    },
    projectLink: {
        contentType: String
    },
    projectStatus: {
        type: String
    },
    // build relationship between the post schema and the user schema
    postedBy: {
        type: ObjectId,
        ref: "User"
    },
    posted: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Post", postSchema)