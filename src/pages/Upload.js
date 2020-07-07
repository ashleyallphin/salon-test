import React, { Component } from 'react';
import '../styles/pages.css';
import UploadProjectForm from '../components/UploadProjectForm';


class Upload extends Component {

    render() {
        return (
            <div className="page">
                <UploadProjectForm />
            </div>
        );
    }
}

export default Upload;