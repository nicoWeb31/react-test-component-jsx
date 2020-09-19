import React from 'react';
import ImgItem from '../image-item/ImgItem';
import "./imageList.style.css"


const ImgList = ({photos}) => {
    return (
        <div>
            <h1>listes des images trouvé:</h1>
            {
                photos.map(({id, description, urls}) =>{
                    return (
                        <div>
                        <ImgItem photo={urls} key={id} description={description}/>
                        </div>

                    )
                })
            }
            
        </div>
    );
}

export default ImgList;