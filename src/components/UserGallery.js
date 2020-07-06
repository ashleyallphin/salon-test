import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faHome } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Button from 'react-bootstrap/Button';
import { isAuthenticated } from '../api/authentication-api';
import '../styles/components.css'

class UserGallery extends Component {

    render() {
        return (
            < div className="component">                    
                <div className="section-title">
                       ***Add username from route param****'s Gallery
                        {/* {user.username}'s Profile */}
                    </div>
                <h1>display user projects here</h1>
            </div>
        )            
}}

export default UserGallery