import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './LogIn.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../../../assets/images/salon-icon-red.svg'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            username: "",
            password: "",
            error: ""
        }
    }

    render() {
        return (
            <div class="signup">
                <Navbar href="/login" className="navbar">
                <a href="/" >
                    salon</a>
                </Navbar>
                <div class ="content">
                    <Jumbotron fluid class="jumbotron" >
                            <img
                            alt="Salon Icon"
                            src={logo}
                        />{' '}
                        <h1>bonjour</h1>
                        <Form.Group
                            controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="username" />
                            <Form.Control type="text" placeholder="password" />
                            <div className="buttons">
                            <Button id="log-in-button">Log In</Button>{' '}
                            <Button id="sign-up-button">Sign Up</Button>{' '}
                        </div>
                        </Form.Group>
                    </Jumbotron>
                </div>
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

export default SignUp;