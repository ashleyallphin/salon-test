import React, { Component } from 'react';
import TopNav from '../components/TopNav-backup';
import SignUpForm from '../components/SignUpForm';
import '../styles/components.css';
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