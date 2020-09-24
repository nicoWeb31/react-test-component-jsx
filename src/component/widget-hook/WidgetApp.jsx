import React, { useState } from 'react';
import Accordeon from './accordeon/Accordeon';

import { items, options } from './datas'
import List from './list/List';
import Translate from './translate/Translate';
import Route from '../Route'
import Search from './Search';



const WidgetApp = () => {


    //state Liste
    const [selected, setSelected] = useState(options[0])
    const [showDropDown, setshowDropDown] = useState(true)


    const onClickShowDD = () => {
        setshowDropDown(!showDropDown)
    }

    return (
        <>
            <h1>Widget - hook</h1>
            <Route path='/widget/'>
                <Accordeon items={items} />
            </Route>

            

            <div>
            <Route path='/search'>
                <Search />
            </Route>
            </div>

            <div>

                <button onClick={onClickShowDD}>Toglle drop Down</button>

                {
                    showDropDown ?
                    (<List options={options}
                        label="Select a color"
                        selected={selected}
                        onSeletedChange={setSelected}
                    />) :
                    (null)
                }


            </div>

            <div>

                <Translate/>
            </div>

        </>
    );
}

export default WidgetApp;