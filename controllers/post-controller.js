// import post model
const Post = require ('../models/post-model');
const formidable = require ('formidable');
const fs = require ('fs');
const _ = require ('lodash');
const color = require('colors-cli/toxic');

exports.postsById = (req, res, next, id) => {
    Post.findById(id)
    .populate("postedBy", "_id username email")
    .exec((err, post) => {
        if (err || !post) {
            return res.status(400).json({
                error: err
            });
        }
        req.post = post;
        next();
    });
};

exports.getPosts = (req, res) => {
    console.log(`getPosts method from post-controller`.x155)
    // get posts from database
    const posts = Post.find()
    .populate("postedBy", "_id username email")
    // this select method is optional -- if left out, ALL of the values will be returned
    .sort ({ posted: -1 })
    .select("_id body title projectMedium projectCategory projectTags projectYear projectLink projectStatus posted")
    .then(posts => {
        // status 200 is default, so we can leave it out in the future
        // when key and value are the same, we can leave it as one word ('posts')
        res.status(200).json (posts);
    })
    console.log(`POST FORM DATA: `.x117, posts)
    .catch(err => console.log(err))
};

// method to create a post
exports.createPost = (req, res, next) => {
    console.log(`createPost method from post-controller`.x155)
    // method from formidable package
    let form = new formidable.IncomingForm();
    // keep extensions of the images
    form.keepExtensions = true;
    // parse the request
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "There was an error uploading your image."
            });
        }
        // create a post based on all the fields coming from the req
        let post = new Post(fields);
        // from the post model, which is connected to the post to the user
        post.postedBy = req.profile;
        req.profile.hashed_password = undefined;
        req.profile.salt = undefined;
        // handle files
        if(files.projectImage) {
            post.projectImage.data = fs.readFileSync(files.projectImage.path);
            post.projectImage.contentType = files.projectImage.type;
        };
        post.save((err, result) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
            }
            res.json(result);
        });
    });
    
};

exports.postsByUser = (req, res) => {
    Post.find({postedBy: req.profile._id})
    .populate("postedBy", "_id username email")
    .sort("posted")
    .exec((err, posts) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }
        res.json(posts);
    });
};

exports.isPoster = (req, res, next) => {
    let isPoster = req.post && req.auth && req.post.postedBy._id === req.auth._id
    if (!isPoster) {
        return res.status(403).json({
            error: "User is not authorized to perform this action."
        });
    }
    next();
};

exports.updatePost = (req, res, next) => {
    let post = req.post
    post= _.extend(post, req.body)
    post.updated = Date.now()
    post.save(err => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        res.json(post);
    });
};

exports.deletePost = (req, res) => {
    let post = req.post
    post.remove((err, post) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        res.json ({
            message: "Post deleted successfully."
        });
    });
};

exports.getProjectImage = (req, res, next) => {
    res.set('Content-Type', req.post.projectImage.contentType);
    return res.send(req.post.projectImage.data);
};