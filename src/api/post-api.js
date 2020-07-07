const color = require('colors-cli/toxic');
// router.get('/posts', restrictedRouteAccess, getPosts);
// router.get("/posts/by/:username", restrictedRouteAccess, postsByUser);
// router.delete("/post/:postId", restrictedRouteAccess, isArtist, deletePost);
// router.post('/post/new/:username', restrictedRouteAccess, createPost, createPostValidator)
// router.param("username", getUserByUsername);
// router.param("postId", postsById);

export const uploadProject = (username, token, post) => {
    return fetch(`/post/new/${username}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: post
    })
        .then(response => {
            return response.json();
        })
        .catch (err => console.log(err))
};

export const listProjects = () => {
    return fetch(`/posts`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const listOneProject = (postId) => {
    console.log(`\nhitting listOneProject from post-api.js\n`.x205);
    return fetch(`/post/${postId}`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const listProjectsByUser = (username, token) => {
    console.log(`\nhitting listProjectsByUser from post-api.js\n`.x205);
    return fetch(`/posts/by/${username}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": 'application/json',
            Authorization: `Bearer ${token}`
        },
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};