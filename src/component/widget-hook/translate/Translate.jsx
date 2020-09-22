import React, { useState } from 'react';
import List from '../list/List';

import { translateOpions } from '../datas'




const Translate = () => {

    const [langage,setlangage] = useState(translateOpions[0])

    return (
        <>
            <h1>Trtanslate</h1>
            <List options={translateOpions} selected={langage} onSeletedChange={setlangage} />
        </>
    );
}

export default Translate;