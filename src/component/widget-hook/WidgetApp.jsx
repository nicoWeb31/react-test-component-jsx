import React, { useState } from 'react';
import Accordeon from './accordeon/Accordeon';
import Search from './api/Search';
import { items, options } from './datas'
import List from './list/List';
import Translate from './translate/Translate';



const WidgetApp = () => {


    //state Liste
    const [selected, setSelected] = useState(options[0])
    const [showDropDown, setshowDropDown] = useState(true)

    //navvigation fromscratch
    const showAccordion = () => {
        if (window.location.pathname === '/widget') {
            return <Accordeon items={items} />
        }
    }

    const showList = () => {
        if (window.location.pathname === '/list') {
            return <List options={options}
                label="Select a color"
                selected={selected}
                onSeletedChange={setSelected}
            />
        }
    }

    const showSearch = () => {
        if (window.location.pathname === '/search') {
            return <Search />
        }
    }

    const showTranslate = () => {
        if (window.location.pathname === 'widget/translate') {
            return <Translate />
        }
    }


    const onClickShowDD = () => {
        setshowDropDown(!showDropDown)
    }

    return (
        <div>
            <h1>Widget - hook</h1>
            <div>

                {showAccordion()}
            </div>
            <hr />


            <div>
                {showSearch()}
            </div>
            <hr />

            <div>

                <button onClick={onClickShowDD}>Toglle drop Down</button>

                {
                    showDropDown ?
                        (showList()) :
                        (null)
                }
            </div>
            <hr />


            <div>
                {showTranslate()}

            </div>

        </div>
    );
}

export default WidgetApp;