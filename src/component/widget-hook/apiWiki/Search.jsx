import React, { useState,useEffect } from 'react';
import ApiWiki from './apiAxios/wikiApi'




const Search = () => {


    const [term, setTerm] = useState("")
    const [results, setResult]= useState([])

    useEffect(() =>{
        ApiWiki.getData(term).then(
            response => setResult(response.data.query && response.data.query.search)

        )
    },[term])


    const onInputChange = (e) =>{
        const {value} = e.target;
        setTerm(value)
    }


    const renderResult =
        results && results.map(({title,snippet,pageid}) => {
        return (
            <>
            <div className="item" key={pageid}>
                <div className="content">
                    <div className="header">
                    {title}
                    </div>
                    {snippet}
                </div>
            </div>

            </>
        )
    })

    console.log(results)
    return (
        <>
            <h1>Search </h1>
            <div className="ui form">
                <div className="field">
                <label>Enter search term : </label>
                <input className='input' onChange={onInputChange} value={term} name="term"/>
                <div className="ui celled list">

                    {renderResult}
                </div>

                </div>
            </div>


        </>
    );
}

export default Search;  