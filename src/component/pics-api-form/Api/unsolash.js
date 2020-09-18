import axios from 'axios';

//unsplash api photo
const apiKey = 'VFAuFBpe9cSdkBDfOQ-No7A2nYz0cv3fape2F0m9Mr8'
//const secretKey = 'IlXNU1fKKLFRMRkj60GW_eFL-5zIa8iVpCB22Vpsld0'
const location = 'https://api.unsplash.com/'

const fetchData = async (term) => {

    return await axios.get(`${location}search/photos`,{
        params: {query: term},    /////ou  ${location}search/photos?query=${term}`
        headers:{
            Authorization: `Client-ID ${apiKey}`
        }
    })
}

export default {
    fetchData
}