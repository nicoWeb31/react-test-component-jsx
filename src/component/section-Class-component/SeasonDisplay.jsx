import React, { useState } from 'react';

const SeasonDisplay = () => {

    const [pos, setPos] = useState(null)

    window.navigator.geolocation.getCurrentPosition(
        (position)=> {
            console.log(position)
        },
        (err) => console.log(err)
    );




    return (
        <>
            <div>Season display</div>
            <p></p>
        </>
    );
}

export default SeasonDisplay;