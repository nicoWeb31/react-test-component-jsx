import React from 'react';
import faker from 'faker';
import ApprovalCard from './ApprovalCard/ApprovalCard';
import CommentItems from './Comment/CommentItems';


const ViewSection = () => {
    return (

<>

<h1>Content - jsx - props</h1>

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
        </>
    );
}

export default ViewSection;