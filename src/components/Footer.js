import React, { Component } from 'react';
import '../styles/Components.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



class Footer extends Component {

    render() {
        return (
                <div className="footer text-center">
                    <a
                        href="https://github.com/ashleyallphin/"
                        target="_blank"
                        rel="noopener noreferrer">
                    <FontAwesomeIcon icon={["fab", "github"]} />
                    </a>
                </div>
                    );
    }
}

export default Footer;