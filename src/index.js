import React from 'react';
import ReactDom from 'react-dom';
import ViewSection from './component/jsx-content-props/ViewSection';
import ViewClass from './component/section-Class-component/ViewClass';

const App = () => {



    return (
<>
    <ViewSection/>

        <ViewClass/>

</>
    );
}


ReactDom.render(
    <App />,
    document.querySelector('#root')
)