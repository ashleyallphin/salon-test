import React, { Component } from 'react';
import TopNav from '../components/TopNav';
import SignUpForm from '../components/SignUpForm';
import '../styles/Components.css';
import Footer from '../components//Footer'


class SignUp extends Component {
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
                "Content-Type": "application/json"
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
                <TopNav />
                    <SignUpForm />
                <Footer />
            </div>
        );
    }
}

export default SignUp;