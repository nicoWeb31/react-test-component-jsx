import React, { Fragment, useState } from 'react';


const Accordeon = ({ items }) => {

    const [activeId, setActiveId] = useState(null)

    const handleClick = (id) =>{
        setActiveId(id)
    }


    //map render item
    const renderItems = items.map((item,index) => {
        return (
            <Fragment key={item.title}>
                <div className="title active"  onClick={()=>handleClick(index)}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
            {
                activeId === index ? 
                (
                    item.content
                ):
                ('')
            }

            </Fragment>
        )
    })



    return (
        <>
            <div className ="ui styled accordion">
                {renderItems}
            </div>
            {activeId}
        </>
    );
}

export default Accordeon;   