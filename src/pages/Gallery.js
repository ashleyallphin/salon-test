import React, { Component } from 'react';
import ProjectCard from '../components/ProjectCard';

class Gallery extends Component {

    componentDidMount() {
        document.title = `Salon: Gallery`;
    }

    render() {
        return (
                <>
                <ProjectCard />
                </>
        );
    }
}

export default Gallery;