import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './LogIn.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../../../assets/images/salon-icon-red.svg'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class LogIn extends Component {
    constructor() {
        super()
        this.state = {
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

export default LogIn;