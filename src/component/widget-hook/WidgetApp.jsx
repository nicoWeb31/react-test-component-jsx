import React from 'react';
import Accordeon from './accordeon/Accordeon';
import {items} from './items'



const WidgetApp = () => {
    return (
        <div>
            <h1>Widget - hook</h1>
            <div className="">
                <Accordeon items={items}/>
            </div>

        </div>
    );
}

export default WidgetApp;