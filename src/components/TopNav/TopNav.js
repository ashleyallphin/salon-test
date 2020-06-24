import React, { Component } from 'react';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import './TopNav.css';
import logo from '../../assets/images/salon-wordmark-white.svg';

class TopNav extends Component {

    render() {
        return (

        <div className="navigation">    
            <Navbar collapseOnSelect className="navbar top-nav" expand="lg">
            <Navbar.Brand href="/">
                <img src={logo}
                alt="Salon logo"></img>
            </Navbar.Brand>
            </Navbar>
        </div>
        );
    }
}

export default TopNav;