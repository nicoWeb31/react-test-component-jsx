import React, { useEffect, useState } from 'react';
import apiGoogle from "../api/googleTranslate/ApiGoogleTranslate"


const Convert = ({text,language}) => {

    const [result, setresult] = useState('')
    const [debouncedText, setdebouncedText] = useState(text)

    useEffect(()=>{
        const timerId = setTimeout(()=>{
            setdebouncedText(text)
        },500)

        return ()=>{
            clearTimeout(timerId)
        }
    },[text])


    useEffect(()=>{

        //console.log('text or language change !')
        apiGoogle.translate(debouncedText,language.value).then(
            response =>{
                //console.log(response.data.data.translations[0].translatedText)
                setresult(response.data.data.translations[0].translatedText)
            }
        )
    },[language,debouncedText])


    return (
        <>
        <h1 className='ui header'>{result}</h1>
        </>
    );
}

export default Convert;