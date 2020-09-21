import React from 'react';
import Accordeon from './accordeon/Accordeon';
import Search from './apiWiki/Search';
import {items} from './items'



const WidgetApp = () => {
    return (
        <div>
            <h1>Widget - hook</h1>
            <div className="">
                <Accordeon items={items}/>
            </div>

            <div>
                <Search/>
            </div>

        </div>
    );
}

export default WidgetApp;