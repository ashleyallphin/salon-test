import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navigation.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import logo from '../../assets/images/salon-icon-white.svg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Navigation extends Component {

    render() {
        return (
        <div className="navigation">
            <Navbar className="navigation" collapseOnSelect expand="lg">
            <div className="navigation-wordmark">salon</div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto navigation">
                <Nav.Link className="navigation-link active" href="#features">Your Studio</Nav.Link>
                <Nav.Link href="#features" className="navigation-link" >Browse Gallery</Nav.Link>
                {/* <Nav.Link href="#pricing">View Gallery</Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
        );
    }
}

export default Navigation;