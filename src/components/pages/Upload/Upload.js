import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import './Upload.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import logo from '/../../assets/images/salon-icon-white.svg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navigation from '../../Navigation/Navigation';

class Upload extends Component {
    constructor() {
        super()
        // initial state
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            username: "",
            password: "",
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
        const { firstName, lastName, email, username, password } = this.state
        const user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            username: username,
            password: password
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
            <div className="upload">
                <Navigation />
                <Jumbotron fluid className="jumbotron" >
                    <div className="vertical-center">
                    <h1>add to your gallery</h1>
                        <Form.Group>    
                            <Form.Control
                                onChange={this.handleChange("firstName")}
                                // value={this.state.firstName}
                                id="first-name-input" type="text" placeholder="first name" />
                            <Form.Control
                                onChange={this.handleChange("lastName")}
                                // value={this.state.lastName}
                                id="last-name-input" type="text" placeholder="last name" />
                            <Form.Control
                                onChange={this.handleChange("email")}
                                // value={this.state.email}
                                id="email-input" type="email" placeholder="email address" />
                            <Form.Control
                                onChange={this.handleChange("username")}
                                // value={this.state.username}
                                id="username-input" type="text" placeholder="username" />
                            <Form.Control
                                onChange={this.handleChange("password")}
                                // value={this.state.password}
                                id="password-input" type="password" placeholder="password" />
                            <div className="buttons">
                            <Button 
                                onClick={this.uploadProject}
                                id="sign-up-button">Display Project</Button>{' '}
                            </div>

                            {/* <div className="text-links">
                            <a href="/">
                                <p></p>
                            </a>
                        </div> */}
                        
                        </Form.Group>
                    
                        

                    </div>
                    
                </Jumbotron>

                <div className="footer text-center">
                    <a
                        href="https://github.com/ashleyallphin/"
                        target="_blank"
                        rel="noopener noreferrer">
                    <FontAwesomeIcon icon={["fab", "github"]} />
                    </a>
                </div>
            
            </div>
        );
    }
}

export default Upload;