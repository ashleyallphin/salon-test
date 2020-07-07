// router.get('/posts', restrictedRouteAccess, getPosts);
// router.get("/posts/by/:username", restrictedRouteAccess, postsByUser);
// router.delete("/post/:postId", restrictedRouteAccess, isPoster, deletePost);
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