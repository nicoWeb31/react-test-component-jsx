import React from 'react';
import ReactDom from 'react-dom';
import ViewSection from './component/jsx-content-props/ViewSection';
import AppPics from './component/pics-api-form/AppPics';
import ViewClass from './component/section-Class-component/ViewClass';

const App = () => {



    return (
<>
    <ViewSection/>

    <ViewClass/>

    <AppPics/>

</>
    );
}


ReactDom.render(
    <App />,
    document.querySelector('#root')
)