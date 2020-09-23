import React, { useState } from 'react';
import Accordeon from './accordeon/Accordeon';
import Search from './api/Search';
import { items, options } from './datas'
import List from './list/List';
import Translate from './translate/Translate';
import Route from '../Route'



const WidgetApp = () => {


    //state Liste
    const [selected, setSelected] = useState(options[0])
    const [showDropDown, setshowDropDown] = useState(true)


    const onClickShowDD = () => {
        setshowDropDown(!showDropDown)
    }

    return (
        <div>
            <h1>Widget - hook</h1>
            <div className="">
                <Accordeon items={items} />
            </div>

            <div>
            <h1>Liste - option - color</h1>
                <Search />
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

        </div>
    );
}

export default WidgetApp;