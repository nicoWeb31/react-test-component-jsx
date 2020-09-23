import React, { Component } from 'react'
import { connect } from 'react-redux'



class Song extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    
    render() {
        const {songs} = this.props;
        
        return (
            <h3>Song list</h3>
        );
    }
}


//recupere mon state et envoye en props
const mapStateToProps =(state)=>{

return {songs : state.songList}

}

export default connect(mapStateToProps)(Song);