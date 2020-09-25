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

        //console.log(this.props.users)
        // const {name} = this.state.user ;
        const user = this.props.users.find(u => u.id === this.props.userId)


        return (

            <div className='header'><span>{user ? user.name : '.........'}</span></div>

        );
    }
}


const mapStateToProps = state => {
    return ({
        users: state.users
    })
}


export default connect(mapStateToProps, { fetchUser })(Userpost);