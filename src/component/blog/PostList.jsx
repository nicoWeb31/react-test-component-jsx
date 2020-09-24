import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../../actions'


class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    
    }

    componentDidMount(){
        this.props.fetchPosts();
    }

    render() {
        console.log(this.props.fetchPosts)
        return (
            <div>
                Post List
            </div>
        );
    }
}




export default connect(null, {fetchPosts})(PostList);