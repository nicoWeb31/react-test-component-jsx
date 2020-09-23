import React from 'react'


const SongItem = ({ song: { title } }) => {
    return (

        <>
            <div className='rigth floated content'>
                <button className='ui button primary'>Select</button>
            </div>
            <div className="content">
                {title}
            </div>

        </>
    );
}

export default SongItem;