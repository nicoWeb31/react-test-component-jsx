import React from 'react';
import ImgItem from '../image-item/ImgItem';
import "./imageList.style.css"


const ImgList = ({ photos }) => {
    return (
        <div>
            <h1>listes des images trouvé:</h1>
            <div className="_image-list">
                {
                    photos.map((photo) => {
                        return (
                            <ImgItem photo={photo} key={photo.id}/>

                        )
                    })
                }
            </div>

        </div>
    );
}

export default ImgList;