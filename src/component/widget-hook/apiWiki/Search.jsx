import React, { useState,useEffect } from 'react';




const Search = () => {



    useEffect(() =>{

    },[])

    const [term, setTerm] = useState("")

    const onInputChange = (e) =>{
        const {value} = e.target;
        setTerm(value)
    }

    return (
        <>
            <h1>Search </h1>
            <div className="ui form">
                <div className="field">
                <label>Enter search term : </label>
                <input className='input' onChange={onInputChange} value={term} name="term"/>


                {term}


                </div>
            </div>


        </>
    );
}

export default Search;  