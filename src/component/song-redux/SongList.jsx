import React, { Component } from 'react'
import { connect } from 'react-redux'


//import de l'action
import {selectSong} from '../../actions'



class SongList extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    renderList(){
        return this.props.songs.map((song)=>{
            return (
                <div className='item' key={song.title}>
                    <div className='rigth floated content'>
                <button className='ui button primary'
                onClick={()=>this.props.selectSong(song)}
                >
                Select
                </button>
            </div>
            <div className="content">
                {song.title}
            </div>
                </div>
            )
        })
    }

    
    render() {

        
        return (
            <div>
            <h3>Song list</h3>

            <div className='ui divided list'>

                {this.renderList()}
            
            </div>
            </div>
        );
    }
}

//recupere mon state et envoye en props
const mapStateToProps =(state)=>{
    return {songs : state.songList}
}






export default connect(mapStateToProps,{selectSong})(SongList);