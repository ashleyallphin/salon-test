import React, { Component } from 'react';
import TopNav from '../components/TopNav-backup';
import '../styles/pages.css';
import LogInForm from '../components/LogInForm';
import Footer from '../components/Footer';

class LogIn extends Component {

    
    render() {
        return (
            <div className="page">
                    <TopNav />
                        <LogInForm />
                    <Footer />
            </div>
        );
    }
}

export default LogIn;