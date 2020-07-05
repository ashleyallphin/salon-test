import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faHome, faUserTimes } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Redirect, Link } from 'react-router-dom';
import { read } from '../api/user-api';
import TopNav from '../components/TopNav';
import { isAuthenticated } from '../api/authentication-api';

class Profile extends Component {
    constructor () {
        super()
        this.state = {
            user: "",
            redirectToSignIn: false
        };
    };

    init = (username) => {
        const token = isAuthenticated().token
        read(username, token)
        .then(data => {
            
                this.setState({user:data})
            
        });
    }

    componentDidMount() {
        const username = this.props.match.params.username;
        this.init(username);
    }

    render() {


        const { redirectToSignIn, user } = this.state
        if(redirectToSignIn) return <Redirect to="/login" />

        

        return (
            
            <>
            
            <TopNav />

            
            
            <div className="profile-section">
				
                    <div className="section-title">
                        {user.username}'s Profile
                    </div>

                    <Card
                    className="profile-card">
                        
                        <Card.Img
                            className="profile-image"
                            src="https://thevelvetonion.files.wordpress.com/2012/02/noelfielding_painting.jpg?w=350&h=200&crop=1"
                            alt={user.username}>
                            </Card.Img>
                        
                        <Card.Body
                        className="profile-card-body"
                        >

                            <h2>
                                {user.username}
                                {/* <FontAwesomeIcon icon={faUserTimes} /> */}
                            </h2>
                            <h3>London</h3>
        {/* showing connection to backend */}
        <p>{`Joined ${new Date(user.created).toDateString()}`}</p>
                            <h4>Studied fine art at Croydon University.  Has exhibited artworks in the Royal Albert Hall, the Saatchi Gallery and The Tate Liverpool, among others. Paintings are visceral and animated, worked on in bursts of energetic vigour, drawing on surrealism, dada and neo-expressionism.</h4>

                            <div className="flex-div">

                            <a
                            className="profile-link-icon"
                            href="/"
                            rel="noopener noreferrer"
                            target="_blank">
                                <FontAwesomeIcon icon={faHome} />
                            </a>
                            <a
                            className="profile-link-icon"
                            href="/"
                            rel="noopener noreferrer"
                            target="_blank">
                                <FontAwesomeIcon icon={faStore} />
                            </a>
                            <a
                            className="profile-link-icon"
                            href="/"
                            rel="noopener noreferrer"
                            target="_blank">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a
                            className="profile-link-icon"
                            href="/"
                            rel="noopener noreferrer"
                            target="_blank">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>

                        </div>


                        {isAuthenticated().user &&
                            isAuthenticated().user._id === user._id && (

                                <div className="flex-div">
                                
                                <Link to={`/artist/edit/${user.username}`}>
                                    <Button className="edit-profile-button"
                                    variant="primary">
                                    Edit Profile
                                    </Button>
                                </Link>
                                    

                                    <Button className="upload-project-button"
                                    variant="primary">
                                    Upload a Project
                                    </Button>
                                
                                </div>
                            )}

                            {isAuthenticated().user &&
                            isAuthenticated().user._id !== user._id && (

                                <div className="flex-div">
                                
                                <a href="http://www.paypal.com">
                                    <Button className="edit-profile-button"
                                    variant="primary">
                                    Donate to User
                                    </Button>
                                </a>
                                    
                                
                                </div>
                            )}

                        
                        </Card.Body>

                    </Card>

				</div>  

            </>          

        )
    }
}

export default Profile