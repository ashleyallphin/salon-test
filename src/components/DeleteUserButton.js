import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTimes } from '@fortawesome/free-solid-svg-icons'

class DeleteUserButton extends Component {

    render() {

        return (
        <a
            className="delete-profile-icon"
            href="/"
            rel="noopener noreferrer"
            target="_blank"
        >
                <h2>
                    <FontAwesomeIcon icon={faUserTimes} />
                </h2>
        </a>

        )

    }

}

export default DeleteUserButton