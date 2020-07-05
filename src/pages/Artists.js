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
            this.setState({ users: data });
            });
    }

    render() {
        return (
            <div>users</div>
        );
    }
}

export default Users;