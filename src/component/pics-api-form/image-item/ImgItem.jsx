import React from 'react';


const ImgItem = ({photo}) => {
    console.log(photo)

    return (
        <>
            <img src={photo.small} alt=""/>
        </>
    );
}

export default ImgItem;