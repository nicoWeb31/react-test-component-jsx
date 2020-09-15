import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentItems from './component/Comment/CommentItems';

const App = () => {



    return (
        <div className="ui container comments" >

            <CommentItems name='sam' content="Nice Blog post" image={faker.image.avatar()} date='today at 6:00' />
            <CommentItems name='alex' content="lorem ksksksksk" image={faker.image.avatar()} date='today at 6:00' />
            <CommentItems name='jane' content="lorem ksksksksk" image={faker.image.avatar()} date='today at 6:00' />


        </div>
    );
}


ReactDom.render(
    <App />,
    document.querySelector('#root')
)