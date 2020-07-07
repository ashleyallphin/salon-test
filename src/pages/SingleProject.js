import React, { Component } from "react";
import { listProjects } from "../api/post-api";
import DefaultProjectImage from '../assets/images/default_pics/salon-default-project-pic.png';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import wip from '../assets/images/default_pics/WIP.svg';

class SingleProject extends Component {

    constructor() {
    super();
    this.state = {
        posts: [],
    };
    }

    componentDidMount() {
    document.title = `Salon: Gallery`;
    listProjects().then((data) => {
        if (data.error) {
        console.log(data.error);
        } else {
        this.setState({ posts: data });
        }
    });
    }

    renderProjects = (posts) => (
        
        <div className="projects container fluid">

        </div>
    );

    render() {
        const { posts } = this.state;
        return (
        <>
            <div className="section-title">Public Gallery</div>
            {this.renderProjects(posts)}
        </>
    );
}}

export default SingleProject;