import React, { Component } from 'react';
import { listOneProject }  from '../api/post-api';

class SingleProject extends Component {
    
    state = {
        post: ''
    }

    componentDidMount = () => {
        const postId = this.props.match.params.postId
        listOneProject(postId).then(data => {
            console.log("listOneProject")
            if (data.error) {
                console.log(data.error)
            } else {
                this.setState( { post:data });
            }
            console.log("from page", this.state.post);
        });
    }

    render() {

        return (
            <div>
                
            </div>
        )
    }
}

export default SingleProject