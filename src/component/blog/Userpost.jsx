import React, { Component } from 'react'

import { connect } from 'react-redux'
import { fetchUser } from '../../actions'





class Userpost extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    componentDidMount() {


        this.props.fetchUser(this.props.userId);

    }


    render() {


        return (

            <div className='header'><span>{this.props.user ? this.props.user.name : '.........'}</span></div>

        );
    }
}

///deux argument le state et les props du compo
const mapStateToProps = (state,ownProps) => {
    return ({
        user: state.users.find(u => u.id === ownProps.userId)
    })
}


export default connect(mapStateToProps, { fetchUser })(Userpost);