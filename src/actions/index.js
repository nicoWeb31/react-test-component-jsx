import ApiPlacholder from '../api/JsonPlaceholder';
import _ from 'lodash'


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
//memoize 'mise en cach'

export const fetchUser = function(id){


    return async function(dispatch){
        const response = await ApiPlacholder.fetchUser(id);
    
        dispatch({
            type :'FETCH_USER',
            payload: response.data
        })
    }

}


// export const fetchPostAndUsers = () => async (dispatch,getState) =>{

//     await dispatch(fetchPosts())

//     //loadach syntax

//     const userId = _.uniq(_.map(getState().posts, 'userId'))

//     userId.forEach(id => {
//         dispatch (fetchUser(id))
//     });

// }



