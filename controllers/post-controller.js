// import post model
const Post = require ('../models/post-model')

exports.getPosts = (req, res) => {

    // get posts from database
    const posts = Post.find()
    // this select method is optional -- if left out, ALL of the values will be returned
    .select("_id body title")
    .then((posts) => {
        // status 200 is default, so we can leave it out in the future
        // when key and value are the same, we can leave it as one word ('posts')
        res.status(200).json({ posts: posts })
    })
    .catch(err => console.log(err))
};

// method to create post
exports.createPost = (req, res) => {

    const post = new Post(req.body)

    post.save((err, result) => {
        // validation handled with validator middleware
        // if there's no error, return with status 200/OK
        res.json({
            message: "Post created successfully."
        })
    })

}