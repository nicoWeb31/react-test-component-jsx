import React, { useState } from 'react';

const SearchBar = () => {


    const [input,setInput] = useState({
        name:"",
        value:"",

    })


    return (
        <div className="ui segment">
            search bar

            <form className="ui form">
            <div className="field">
                <label htmlFor="" className="">Image search</label>
                <input type="text" name="" className=""/>
            </div>
            </form>

        </div>
    );
}

export default SearchBar;