import Axios from 'axios'




//----key google api-----//
    const keyApiGoogleTranslate = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"

    //---endoint ---//
    const apiEndPoint = "https://translation.googleapis.com/language/translate/v2"


    const translate = async(text,lang)=>{
        return await Axios.post(`${apiEndPoint}`,{},
        {
            params:{
                q : text,
                target: lang,
                key: keyApiGoogleTranslate
            }
        })
    }

export default {
    translate
}    