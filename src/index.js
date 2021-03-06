import React from 'react';
import ReactDom from 'react-dom';
import ViewSection from './component/jsx-content-props/ViewSection';
import AppPics from './component/pics-api-form/AppPics';
import ViewClass from './component/section-Class-component/ViewClass';
import WidgetApp from './component/widget-hook/WidgetApp';
import Route from './component/Route';
import Header from './component/Header';
import SongList from './component/song-redux/SongList';

//redux
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import combineReducers from './reducers'
import SongItem from './component/song-redux/SongItem';
import AppBlog from './component/blog/AppBlog';
import thunk from 'redux-thunk'




const App = () => {



    return (
        <>

            <Header />


            <Route path='/'>
                <ViewSection />
            </Route>

            <Route path='/widget'>
                <WidgetApp />
            </Route>

            <Route path='/pic'>
                <AppPics />
            </Route>

            <Route path='/viewclass'>
                <ViewClass />
            </Route>

            <Route path='/songs'>
                <div className="ui container grid">
                    <div className=" ui row">
                        <div className="column eight wide">
                            <SongList />
                        </div>
                        <div className="column four wide">
                            <SongItem />
                        </div>

                    </div>
                </div>

            </Route>

            <Route path='/blog'>
                <AppBlog />
            </Route>



        </>
    );
}


const store = createStore(combineReducers,applyMiddleware(thunk))

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)