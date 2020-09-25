import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../../actions'


class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    
    }

    componentDidMount(){
        //apeller la methode fetch de l'action 
        //une fois call charge les datas dans le state, reste  a le recuperer via map state to props
        this.props.fetchPosts();
    }

    render() {
        console.log(this.props.posts)
        return (
            <div>
                Post List
            </div>
        );
    }
}


const mapStateToProps = state =>{
    return ({posts: state.posts})
}

export default connect(mapStateToProps, {fetchPosts})(PostList);