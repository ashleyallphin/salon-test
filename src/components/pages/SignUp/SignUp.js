import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './SignUp.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../../../assets/images/salon-icon-red.svg'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            username: "",
            password: "",
            error: ""
        }
    }

    render() {
        return (
            <div class="login">
                <Navbar href="/login" className="navbar">
                <a href="/" >
                    salon</a>
                </Navbar>

                    <Jumbotron fluid class="jumbotron" >
                        <div class="vertical-center">
                            <img
                            alt="Salon Icon"
                            src={logo}
                        />{' '}
                        <h1>sign up</h1>
                        <Form.Group>
                            <Form.Control type="text" placeholder="first name" />
                            <Form.Control type="text" placeholder="last name" />
                            <Form.Control type="text" placeholder="username" />
                            <Form.Control type="text" placeholder="email" />
                            <Form.Control type="text" placeholder="password" />
                            <div className="buttons">
                                <Button href="/signup"  id="sign-up-button">Sign Up</Button>{' '}

                            </div>
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

export default SignUp;