import React from 'react';
import { connect } from 'react-redux'


const SongItem = ({ song }) => {




    return (

        <>

        <h2>Song details</h2>

            {song && (
                <>
                    <h3>Titre : {song.title}</h3>
                    <h3>Duration : {song.duration}</h3>
                </>
            )}

        </>
    );
}


const mapStateToProps = state => {
    console.log(state)
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongItem);