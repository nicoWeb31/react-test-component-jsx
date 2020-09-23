import { combineReducers } from 'redux'

const songReducer = () =>{
    return [
        {
            title:'No scrubs',
            duration: '4:34'
        },
        {
            title:'Macarena',
            duration: '2:34'
        },
        {
            title:'All star',
            duration: '3:15'
        },
        {
            title:'Iwant it that way',
            duration: '5:23'
        }
    ]
}


const selectedSongReducer = (selectedSong = null, action) =>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload
    }


    return selectedSong;
}

export default combineReducers({
    songList : songReducer,
    selectedSong : selectedSongReducer
})