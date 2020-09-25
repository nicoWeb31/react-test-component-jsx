import axios from 'axios';
import _ from 'lodash'


// const Axios = () =>{
//     return axios.create({
//         baseURL:"https://jsonplaceholder.typicode.com/"
//     })
// }


const fetchPost =  () => {
    return axios.get("https://jsonplaceholder.typicode.com/posts")
}


//memoize pour mettre en cach les requetes

const fetchUser = _.memoize(function(id){
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
});

export default {
    fetchPost,
    fetchUser
}



