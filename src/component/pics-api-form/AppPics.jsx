import React, { useState } from 'react';
import ImgList from './image-list/ImgList';
import SearchBar from './search/SearchBar';

import "./AppPic.style.css"


const AppPics = () => {


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