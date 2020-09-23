import React, { Component } from 'react'
import { connect } from 'react-redux'
import SongItem from './SongItem'



class SongList extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    renderList(){
        return this.props.songs.map((song)=>{
            return (
                <div className='item' key={song.title}>
                        <SongItem song={song} />
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

export default connect(mapStateToProps)(SongList);