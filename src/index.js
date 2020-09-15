import React from 'react';
import ReactDom from 'react-dom';
import ViewSection from './component/jsx-content-props/ViewSection';

const App = () => {



    return (
<>
    <ViewSection/>
</>
    );
}


ReactDom.render(
    <App />,
    document.querySelector('#root')
)