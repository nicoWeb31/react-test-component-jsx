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
export const fetchPosts = () => async(dispatch) =>{
        
        const response = await ApiPlacholder.fetchPost();

        dispatch({type:'FETCH_POSTS', payload: response.data})

    }

//fecth user with id

export const fetchUser = (id) => async(dispatch)=>{
    const response = await ApiPlacholder.fetchUser(id);

    dispatch({
        type :'FETCH_USER',
        payload: response.data
    })
}



