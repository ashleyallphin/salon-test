import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { isAuthenticated } from '../api/authentication-api';
import { read, updateAccount } from '../api/user-api';
import { Link, Redirect } from 'react-router-dom';
import DeleteUserButton from '../components/DeleteUserButton';

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
            redirectToStudio: false
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

    // record values of input fields
    handleChange = (name) => (event) => {
        this.setState({ [name]: event.target.value })
    };

    componentDidMount() {
        const username = this.props.match.params.username;
        this.init(username);
    }

    // grab data when sign up button is pressed to send to backend
    clickUpdateProfile = event => {
        event.preventDefault();
        const { firstName, lastName, email, username, password } = this.state;
        const user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            username: username,
            password: password || undefined
        };
        console.log(user);
        const token = isAuthenticated().token;
        
        updateAccount(username, token, user).then(data => {
            if (data.error) this.setState({ error: data.error });
            else
                this.setState ({
                    redirectToStudio: true
                });
        })

    };

    updateProfileInputFields = ( firstName, lastName, email, username, password) => (

        <Form.Group>   
                            
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

            <div className="text-links">
            <Link to={`/studio/${username}`}>
                <p>return to your studio</p>
            </Link>
        
            </div>
        
        </Form.Group>
    );

    render() {
        
        const { firstName, lastName, email, username, password, redirectToStudio } = this.state;
        
        if (redirectToStudio) {
            return <Redirect to={`/studio/${username}`} />;
        }

        return (
            <div>
                <h1>Edit Profile </h1>

                <DeleteUserButton
                // to access the user id in the delete user component, from this.state above
                username={username} />

                {this.updateProfileInputFields( firstName, lastName, email, username, password)}
                
            </div>
        );
    }
}

export default EditProfile