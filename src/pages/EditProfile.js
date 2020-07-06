import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { isAuthenticated } from '../api/authentication-api';
import { read, updateAccount } from '../api/user-api';
import { Link, Redirect } from 'react-router-dom';
import DeleteUserButton from '../components/DeleteUserButton';
import Jumbotron from 'react-bootstrap/Jumbotron';
// import loadingImage from '../assets/images/salon-mustach-twitch.gif';
import bsCustomFileInput from 'bs-custom-file-input';

class EditProfile extends Component {

    constructor() {
        super()
        this.state = {
            id: "",
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
            redirectToStudio: false,
            error: "",
            // loading: false
        }
    }



    init = (username) => {
        const token = isAuthenticated().token
        read(username, token)
        .then(data => {
            if (data.error) {
                this.setState({ redirectToStudio:true });
            } else {
                this.setState({ 
                    id: data._id,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    username: data.username,
                });
            }
        });
    };

    
    handleChange = (name) => (event) => {
        this.setState({ error: "" });
        const value = name === "profileImage" ? event.target.files[0] : event.target.value;
        const fileSize = name === "profileImage" ? event.target.files[0].size : 0;
        // populate the form data
        this.userData.set(name, value);
        this.setState({ [name]: value, fileSize });
    };

    componentDidMount() {
        bsCustomFileInput.init()
        // for sending the file
        this.userData = new FormData();
        const username = this.props.match.params.username;
        this.init(username);
    }

    // check if the input fields are valid
    isValid = () => {
        const { firstName, lastName, email, password } = this.state;
            if (firstName.length === 0) {
            this.setState({ error: "First name is required", loading: false });
            return false;
            }
            if (lastName.length === 0) {
                this.setState({ error: "Last name is required", loading: false });
                return false;
            }
            if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            this.setState({
                error: "Please enter a valid email address.",
                loading: false
            });
            return false;
            }
            if (password.length >= 1 && (password.length < 6 || password.length > 15)) {
            this.setState({
                error: "Password must be between 6 and 15 characters long",
                loading: false
            });
            return false;
            }
            return true;
        };

    // grab data when sign up button is pressed to send to backend
    clickUpdateProfile = event => {
        event.preventDefault();
        this.setState({ loading:true });

        if (this.isValid()) {
            const { username } = this.state;   
            console.log(username)         
            const token = isAuthenticated().token;
            updateAccount(username, token, this.userData).then(data => {
                if (data.error) this.setState({ error: data.error });
                else
                    this.setState ({
                        redirectToStudio: true
                    });
        });
        }
    };

    updateProfileInputFields = ( firstName, lastName, email, username, password) => (

        <Form.Group className="text-center">   
            
            <Form>
                <Form.File 
                onChange={this.handleChange("profileImage")}
                id="custom-file"
                type="file"
                accept="image/*"
                label="profile image"
                custom
                />
            </Form>

            <Form.Control
                onChange={this.handleChange("firstName")}
                value={this.state.firstName}
                id="first-name-input" type="text" placeholder="first name" />
            <Form.Control
                onChange={this.handleChange("lastName")}
                value={this.state.lastName}
                id="last-name-input" type="text" placeholder="last name" />
            <Form.Control
                onChange={this.handleChange("email")}
                value={this.state.email}
                id="email-input" type="email" placeholder="email address" />
            <Form.Control
                onChange={this.handleChange("password")}
                value={this.state.password}
                id="password-input" type="password" placeholder="password" />
            <div className="buttons">
            <Button 
                onClick={this.clickUpdateProfile}
                id="sign-up-button">Update Profile</Button>{' '}
            </div>

            <DeleteUserButton
                // to access the user id in the delete user component, from this.state above
                username={username} />

            {/* <div className="text-links">
                <Link to={`/studio/${username}`}>
                    <p>return to your studio</p>
                </Link>
            </div> */}

        </Form.Group>
            
    );


    render() {
        
        const {
            firstName,
            lastName,
            email,
            username,
            password,
            redirectToStudio,
            error,
            loading
        } = this.state;
        
        if (redirectToStudio) {
            return <Redirect to={`/studio/${username}`} />;
        }

        return (
            <div className="component">
                
                <Jumbotron fluid className="jumbotron" >
                    <div className="vertical-center">
                        <div className="page page-title">edit profile</div>
                    </div>                    
                
                </Jumbotron>

                <div
                    className="form-message-error text-center"
                    style={{ display: error ? "" : "none"}}>    
                        { error }
                </div>

                {/* loading state is set to true upon click; show this div after click & before page redirect */}
                {/* { loading ? (
                    <div className="jumbotron text-center">
                        <img
                        alt="Loading"
                        src={loadingImage}
                        />{' '}
                    </div>
                ) : (
                    ""
                )} */}

                {this.updateProfileInputFields( firstName, lastName, email, username, password)}
                
            </div>
        );
    };
}

export default EditProfile