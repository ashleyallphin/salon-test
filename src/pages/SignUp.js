import React, { Component } from 'react';
import TopNav from '../components/TopNav';
import SignUpForm from '../components/SignUpForm';
import '../styles/Components.css';
import Footer from '../components/Footer'


class SignUp extends Component {

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