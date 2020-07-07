import React, { Component } from "react";
import { listProjects } from "../api/post-api";
import DefaultProjectImage from '../assets/images/default_pics/salon-default-project-pic.png';
import { Link } from 'react-router-dom';


class Gallery extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        document.title = `Salon: Gallery`;
        listProjects().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({ posts:data });
            }
        });
    }

    renderProjects = (posts) => (
        
        <div className="row">
                    
        {posts.map(( post, i ) => (
            
            <div className="card col-md-6" key={i}>
            
            <img
                    className="edit-profile-image"
                    src={`/user/image/${post.projectImage}`}
                    alt={post.title}
                    onError = {i => (i.target.src = `${DefaultProjectImage}`)}
                >
                </img>
            
                <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                    <p className="card-text">
                    
                    <p>
                        Display post body until add option to fill out bio.<br></br>
                        {post.body}
                    </p>
                    
                    </p>
                    
                    <Link to={`/artist/studio/${post.projectLink}`}
                    className="btn visit-studio-button">
                    Visit Studio
                    </Link>

                </div>

            </div>
        ))}

        </div>
    )

    

    render() {

        const { posts } = this.state;

        return (
            
            <>
                <div className="section-title">
                    Public Gallery
                </div>
                    
                {this.renderProjects(posts)}
            </>

        );
    }
}

export default Gallery;