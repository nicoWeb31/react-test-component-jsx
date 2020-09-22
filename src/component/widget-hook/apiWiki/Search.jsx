import React, { useState, useEffect } from 'react';
import ApiWiki from './apiAxios/wikiApi'




const Search = () => {


    const [term, setTerm] = useState("")
    const [results, setResult] = useState([])
    

    useEffect(() => {
        
        const timeOutId = setTimeout(()=>{

            if (term) {
                ApiWiki.getData(term).then(
                    response => setResult(response.data.query && response.data.query.search)
                    )
            }

        },500)

        //function invoc avant le rendu ---ici suprime le timeout du dessu, netoye le composant
        return ()=>{
            clearTimeout(timeOutId)
        }

    }, [term])


    const onInputChange = (e) => {
        const { value } = e.target;
        setTerm(value)
    }


    const renderResult =
        results && results.map(({ title, snippet, pageid }) => {
            return (
                <>
                    <div className="item" key={pageid}>
                        <div className="rigth floated content">
                            <a className='ui button' href={`https://en.wikipedia.org?curid=${pageid}`}>read more ....</a>
                        </div>


                        <div className="content">
                            <div className="header">
                                {title}
                            </div>
                            {/* faille xss interprete les cararctéres */}
                            <span dangerouslySetInnerHTML={{ __html: snippet }}></span>
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
                    <input className='input' onChange={onInputChange} value={term} name="term" />
                    <div className="ui celled list">

                        {renderResult}
                    </div>

                </div>
            </div>


        </>
    );
}

export default Search;  