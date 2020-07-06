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
        type: String,
    },
    projectYear: {
        type: String,
        required: true
    },
    projectLink: {
        type: String,
    },
    projectStatus: {
        type: String,
        required: true
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