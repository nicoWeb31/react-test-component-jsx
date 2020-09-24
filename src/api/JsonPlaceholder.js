import axios from 'axios';


const Axios = () =>{
    return axios.create({
        baseURL:"https://jsonplaceholder.typicode.com"
    })
}


const fetchPost =  () => {
    return Axios.get("/posts")
}

export default {
    fetchPost
}