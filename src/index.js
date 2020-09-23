import React from 'react';
import ReactDom from 'react-dom';
import ViewSection from './component/jsx-content-props/ViewSection';
import AppPics from './component/pics-api-form/AppPics';
import ViewClass from './component/section-Class-component/ViewClass';
import WidgetApp from './component/widget-hook/WidgetApp';
import Route from './component/Route';
import Header from './component/Header';


const App = () => {



    return (
<>
    
    <Header/>


    <Route path='/'>
        <ViewSection/>
    </Route>

    <Route path='/widget'>
        <WidgetApp />
    </Route>

    <Route path='/pic'>
        <AppPics />
    </Route>

    <Route path='/viewclass'>
        <ViewClass/>
    </Route>



</>
    );
}


ReactDom.render(
    <App />,
    document.querySelector('#root')
)