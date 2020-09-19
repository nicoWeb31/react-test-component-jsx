import React from 'react';


const ImgItem = ({ photo }) => {
    console.log(photo)

    return (
        <>
            <div className="">
                <img src={photo.small} alt="" style={{width:'250px'}} />
            </div>
        </>
    );
}

export default ImgItem;