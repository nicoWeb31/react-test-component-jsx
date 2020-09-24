import ApiPlacholder from '../api/JsonPlaceholder'


//select a song
export const selectSong = song =>{
    //return an action
    return {
        type: 'SONG_SELECTED',
        payload:song
    }
}

//blog
//fetch post
export const fetchPosts = async() =>{

    const response = await ApiPlacholder.fetchPosts();

    return {
        type:"FETCH_POSTS",
        payload:response
    }
}
