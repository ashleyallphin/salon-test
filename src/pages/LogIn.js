import React, { Component } from 'react';
import TopNav from '../components/TopNav';
import '../styles/Pages.css';
import Jumbotron from 'react-bootstrap/Jumbotron'
import logo from '../assets/images/salon-icon-red.svg'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Footer from '../components/Footer'

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
            <div className="login">

                <TopNav />

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
                                <Button href="/signup"  id="sign-up-button">Sign Up</Button>{' '}

                            </div>
                        </Form.Group>
                        </div>
                    </Jumbotron>
                <Footer />
            </div>
        );
    }
}

export default LogIn;