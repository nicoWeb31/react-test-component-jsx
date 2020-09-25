import React, { Component } from 'react'

import {connect} from 'react-redux'
import {fetchUser} from '../../actions'





class Userpost extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    
    componentDidMount(){
        //apeller la methode fetch de l'action 
        //une fois call charge les datas dans le state, reste  a le recuperer via map state to props
    
        this.props.fetchUser(this.props.userId);
        
        
        
    }


    render() {

        console.log(this.props.user)
        // const {name} = this.state.user ;

        return (
                <h2>Author:{this.props.user.name}</h2>
            );
        }
    }


    const mapStateToProps = state => {
        return ({
            user: state.user
        })
    }
    
    
    export default connect(mapStateToProps,{fetchUser})(Userpost);