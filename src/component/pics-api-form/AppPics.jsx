import React, { useState } from 'react';
import Spinner from '../section-Class-component/Spinner';
import unsplashApi from './Api/unsolash';
import ImgList from './image-list/ImgList';
import SearchBar from './search/SearchBar';

import "./AppPic.style.css";


const AppPics = () => {

    const [photos, setPhotos] = useState([])
    const [loading, setLoading] = useState(false)

    const onSerchSubmit = (term) =>{
        setLoading(true)
    
        try{
            unsplashApi.fetchData(term).then(resp =>{

                setPhotos(resp.data.results)
                setLoading(false)

            })


        }catch(err){
            console.log(err)
        }


    }

    return (
        <div className ="ui container _picContainer">
        <h1>Pics section</h1>
        <SearchBar valueInput={onSerchSubmit} />
        
        <div>
        {
            loading ? <Spinner/> : <ImgList photos={photos}/>
        }
        </div>


        

        </div>
    );
}

export default AppPics;