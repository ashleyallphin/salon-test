import React, { Component } from 'react';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import './Upload.css';
// import Jumbotron from 'react-bootstrap/Jumbotron';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import logo from '/../../assets/images/salon-icon-white.svg';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import UploadProjectForm from '../../components/UploadProjectForm/UploadProjectForm';

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
                <UploadProjectForm />
                <div className="fill-screen"></div>
                <Footer />
            
            </div>
        );
    }
}

export default Upload;