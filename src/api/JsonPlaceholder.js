import axios from 'axios';


// const Axios = () =>{
//     return axios.create({
//         baseURL:"https://jsonplaceholder.typicode.com/"
//     })
// }


const fetchPost =  () => {
    return axios.get("https://jsonplaceholder.typicode.com/posts")
}


const fetchUser =(id)=>{
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
}

export default {
    fetchPost,
    fetchUser
}



