import React, { useState } from 'react';
import ImgList from './image-list/ImgList';
import SearchBar from './search/SearchBar';
import axios from 'axios'

import "./AppPic.style.css"


const AppPics = () => {


    //unsplash api photo
    const apiKey = 'VFAuFBpe9cSdkBDfOQ-No7A2nYz0cv3fape2F0m9Mr8'
    const secretKey = 'IlXNU1fKKLFRMRkj60GW_eFL-5zIa8iVpCB22Vpsld0'


    const [serchValue, setSearchValue] = useState('')

    const onSerchSubmit = (term) =>{
        setSearchValue(term)
    }

    return (
        <div className ="ui container _picContainer">
        <h1>Pics section</h1>
        <SearchBar valueInput={onSerchSubmit} />
        <ImgList/>

        search: {serchValue}

        </div>
    );
}

export default AppPics;