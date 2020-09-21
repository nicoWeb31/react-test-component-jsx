import axios from 'axios';


const endpoint = "http://en.wikipedia.org/w/api.php"

const getData = async (term) =>{
    return await axios.get(`${endpoint}`,{
        params:{
            action: 'query',
            list:'search',
            origin:'*',
            format:'json',
            srsearch: term
        }
    })
}

export default {
    getData
}