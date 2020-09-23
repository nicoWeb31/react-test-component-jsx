import React from 'react';
import ReactDom from 'react-dom';
import ViewSection from './component/jsx-content-props/ViewSection';
import AppPics from './component/pics-api-form/AppPics';
import ViewClass from './component/section-Class-component/ViewClass';
import WidgetApp from './component/widget-hook/WidgetApp';

const App = () => {


    const showWidget = () => {
        if (window.location.pathname === '/widget') {
            return <WidgetApp />
        }
    }
    const showview = () => {
        if (window.location.pathname === '/') {
            return <ViewSection/>
        }
    }

    const showviewClass = () => {
        if (window.location.pathname === '/viewclass') {
            return <ViewClass/>
        }
    }

    const showPic = () => {
        if (window.location.pathname === '/pic') {
            return <AppPics/>
        }
    }

    return (
<>
    {showview()}

    {showviewClass()}

    {showPic()}

    {showWidget()}

</>
    );
}


ReactDom.render(
    <App />,
    document.querySelector('#root')
)