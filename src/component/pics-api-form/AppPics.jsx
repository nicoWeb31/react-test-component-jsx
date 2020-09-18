import React from 'react';
import ImgList from './image-list/ImgList';
import SearchBar from './search/SearchBar';

import "./AppPic.style.css"


const AppPics = () => {
    return (
        <div className ="ui container _picContainer">
        <h1>Pics section</h1>
        <SearchBar/>
        <ImgList/>

        </div>
    );
}

export default AppPics;