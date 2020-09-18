import React from 'react';
import ImgItem from '../image-item/ImgItem'

const ImgList = ({photos}) => {
    return (
        <div>
            <h1>listes des images trouvé:</h1>
            {
                photos.map(photo =>{
                    return (
                        <ImgItem photo={photo.urls} key={photo.id}/>
                    )
                })
            }
            
        </div>
    );
}

export default ImgList;