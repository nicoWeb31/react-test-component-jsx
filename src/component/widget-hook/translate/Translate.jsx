import React, { useState } from 'react';
import List from '../list/List';

import { translateOpions } from '../datas'




const Translate = () => {

    //----state---//
    const [langage, setlangage] = useState(translateOpions[0])
    const [text, settext] = useState("")


    //handleChange
    const onChangeText = (e) => {
        settext(e.target.value)
    }


    return (
        <>
            <h1>Trtanslate</h1>
            <div className="ui form">
                <div className="field">
                    <label> Enter text</label>
                    <input onChange={onChangeText} value={text} />
                </div>

            </div>
            <List options={translateOpions} selected={langage} onSeletedChange={setlangage} label='Select a language !' />

            {text}
        </>
    );
}

export default Translate;