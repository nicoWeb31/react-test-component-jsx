import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPosts, fetchUser} from '../../actions'
import Userpost from './Userpost';


class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    
    }

    renderList(){
        return this.props.posts.map(post =>{
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user"></i>
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            
                        </div>
                    <Userpost  userId={post.userId}/>
                    </div>
                </div>
            )
        })
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
                <h1>Post list</h1>
                {this.renderList()}
            </div>
        );
    }
}


const mapStateToProps = state =>{
    return ({posts: state.posts
            
    })
}

export default connect(mapStateToProps, {fetchPosts})(PostList);