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
            redirectToStudio: false,
            error: ""
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

        if (this.isValid()) {
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
        });
        }

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
        
        const { firstName, lastName, email, username, password, redirectToStudio, error } = this.state;
        
        if (redirectToStudio) {
            return <Redirect to={`/studio/${username}`} />;
        }

        return (
            <div>
                <h1>Edit Profile </h1>

                <div
                    className="form-message-error text-center"
                    style={{ display: error ? "" : "none"}}>    
                        { error }
                </div>

                <DeleteUserButton
                // to access the user id in the delete user component, from this.state above
                username={username} />

                {this.updateProfileInputFields( firstName, lastName, email, username, password)}
                
            </div>
        );
    };
}

export default EditProfile