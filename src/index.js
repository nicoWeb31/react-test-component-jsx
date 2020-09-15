import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentItems from './component/Comment/CommentItems';
import ApprovalCard from './component/ApprovalCard/ApprovalCard';

const App = () => {



    return (
        <div className="ui container comments" >
        
        <ApprovalCard>
        <div>
            <h4>
            Warning !
            </h4>
            Are you want to do this ?
        </div>
        </ApprovalCard>


            <ApprovalCard>
                <CommentItems name='sam' content="Nice Blog post" image={faker.image.avatar()} date='today at 6:00' />
            </ApprovalCard>

            <ApprovalCard>
                <CommentItems name='alex' content="lorem ksksksksk" image={faker.image.avatar()} date='today at 6:00' />
            </ApprovalCard>

            <ApprovalCard>
                <CommentItems name='jane' content="lorem ksksksksk" image={faker.image.avatar()} date='today at 6:00' />
            </ApprovalCard>



        </div>
    );
}


ReactDom.render(
    <App />,
    document.querySelector('#root')
)