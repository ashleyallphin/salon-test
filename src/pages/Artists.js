import React, { Component } from "react";
import { listArtists } from "../api/user-api";

class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        listArtists().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({ users:data });
            }
        });
    }

    render() {

        const { users } = this.state;

        return (
            
            <div className = "container">

                <h1>Users</h1>
                
                <div className="card">
                    
                    {users.map(( user, i) => (

                        <div key={i}>
                            <p>{user.username}</p>
                        </div>
                    ))}

                </div>

            </div>
        );
    }
}

export default Users;