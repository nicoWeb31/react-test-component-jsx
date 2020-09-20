import React from 'react';
import ReactDom from 'react-dom';
import ViewSection from './component/jsx-content-props/ViewSection';
import AppPics from './component/pics-api-form/AppPics';
import ViewClass from './component/section-Class-component/ViewClass';
import WidgetApp from './component/widget-hook/WidgetApp';

const App = () => {



    return (
<>
    <ViewSection/>

    <ViewClass/>

    <AppPics/>

    <WidgetApp />

</>
    );
}


ReactDom.render(
    <App />,
    document.querySelector('#root')
)