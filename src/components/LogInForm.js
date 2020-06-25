import React, { Component } from 'react';
import '../styles/Components.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import logo from '../assets/images/salon-icon-red.svg'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';




class LogInForm extends Component {
    constructor() {
        super()
        // initial state
        this.state = {
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
            <div className="page">
                

                <Jumbotron fluid className="jumbotron" >
                        <div className="vertical-center">
                            <img
                            alt="Salon Icon"
                            src={logo}
                            />{' '}
                        <h1>bonjour</h1>
                        <Form.Group>
                            <Form.Control type="text" placeholder="username" />
                            <Form.Control type="text" placeholder="password" />
                            <div className="text-links">
                            <a href="/">
                                <p>forgot password?</p>
                            </a>
                            </div>
                            <div className="buttons">
                                <Button href="/login" id="log-in-button">Log In</Button>{' '}
                                <Button href="/signup"  id="sign-up-link-button">Sign Up</Button>{' '}

                            </div>
                        </Form.Group>
                        </div>
                    </Jumbotron>


            
            </div>
        );
    }
}

export default LogInForm;