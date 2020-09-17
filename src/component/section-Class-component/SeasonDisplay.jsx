
import React from 'react';

const seasonConfig = {
    summer :{text : "lets hit the beach", icon: "sun"},
    winter :{text: "Burr, it is chily", icon: "winter"}
}


const getSeason = (lat, month) => {
    if (month > 2 && month > 9) {
        return lat > 0 ? "summer" : "winter"
    } else {
        return lat < 0 ? "winter" : "summer"
    }
}


const SeasonDisplay = ({ lat }) => {

    //month js de 0 - 11
    //northern 0 1 3 9 10 11 winter
    //southern 3 4 5 6 7 8 winter
    const currentMonth = new Date().getMonth();
    const season = getSeason(lat, currentMonth);
    const {icon, text} = seasonConfig[season]




    return (
        <div>
            <i class={`${icon} icon`}></i>
            <h1>
                {text}
            </h1>
            <i class={`${icon} icon`}></i>
        </div>
    );
}

export default SeasonDisplay;