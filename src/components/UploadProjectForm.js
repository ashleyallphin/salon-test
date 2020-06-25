import React, { Component } from 'react';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/Components.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import logo from '/../../assets/images/salon-icon-white.svg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class UploadProjectForm extends Component {
    constructor() {
        super()
        // initial state
        this.state = {
            projectTitle: "",
            projectImage: "",
            projectYear: "",
            projectCategory: "",
            projectDescription: "",
            projectMedium: "",
            projectTags: "",
            projectWorkInProgress: false,
            projectLink: "",
            error: ""
        }
    };

    // record values of input fields
    handleChange = (name) => (event) => {
        // array syntax -- will dynamically pick up values for all fields
        this.setState({ [name]: event.target.value })
    };

    // grab data when sign up button is pressed to send to backend
    submitSignUp = event => {
        event.preventDefault();
        const { projectTitle, projectImage, projectCategory, projectDescription, projectMedium, projectTags, projectYear, projectLink, projectWIP } = this.state
        const user = {
            projectTitle: projectTitle,
            projectImage: projectImage,
            projectCategory: projectCategory,
            projectDescription: projectDescription,
            projectMedium: projectMedium,
            projectTags: projectTags,
            projectYear: projectYear,
            projectLink: projectLink,
            projectWIP: projectWIP,
        };
        console.log(user);
        fetch("/signup", {
            method: "POST",
            headers: {
                Accept: "application/json",
                dataType: "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
    };

    render() {
        return (
            <div className="upload-project-form">
                <Jumbotron fluid className="jumbotron" >
                    <div className="vertical-center">
                    <h1>add to your gallery</h1>
                        <Form.Group>    
                            <Form.Control
                                onChange={this.handleChange("projectTitle")}
                                // value={this.state.firstName}
                                id="project-title-input" type="text" placeholder="title" />
                            <Form.Control
                                onChange={this.handleChange("projectImage")}
                                // value={this.state.lastName}
                                id="project-image-input" type="text" placeholder="image" />
                            
                            <Form.Group>
                                <Form>
                                <Form.File 
                                    id="custom-file"
                                    label="Custom file input"
                                    custom
                                />
                                </Form>
                            </Form.Group>

                            <Form.Control
                                onChange={this.handleChange("projectCategory")}
                                // value={this.state.email}
                                id="project-category-input" type="email" placeholder="category" />
                            
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control 
                                onChange={this.handleChange("projectDescription")}
                                // value={this.state.username})}
                                id="project-description-input" type="text" as="textarea" rows="3" placeholder="project description">
                                </Form.Control> 
                                
                            </Form.Group>

                            <Form.Control
                                onChange={this.handleChange("projectMedium")}
                                // value={this.state.password}
                                id="project-medium-input" type="password" placeholder="medium" />
                            <Form.Control
                                onChange={this.handleChange("projectLink")}
                                // value={this.state.email}
                                id="project-link-input" type="email" placeholder="URL" />
                            <Form.Control
                                onChange={this.handleChange("projectTags")}
                                // value={this.state.username}
                                id="project-tags-input" type="text" placeholder="tags (separate by commas)" />
                            
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Control as="select">
                                
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </Form.Control>
                            </Form.Group>
                            
                            <Form.Control
                                onChange={this.handleChange("projectYear")}
                                // value={this.state.password}
                                id="project-year-input" type="password" placeholder="year" />
                            <div className="buttons">
                            <Button 
                                onClick={this.uploadProject}
                                id="upload-project-button">Upload Project</Button>{' '}
                            </div>

                            {/* <div className="text-links">
                            <a href="/">
                                <p></p>
                            </a>
                        </div> */}
                        </Form.Group>
                    </div>
                    
                </Jumbotron>


            
            </div>
        );
    }
}

export default UploadProjectForm;