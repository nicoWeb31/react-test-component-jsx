import React, { Fragment, useState } from 'react';


const Accordeon = ({ items }) => {

    const [activeId, setActiveId] = useState(null)

    const handleClick = (id) =>{
        if(activeId === id){
            setActiveId(null)
        }else{
            setActiveId(id)
        }

    }


    //map render item
    const renderItems = items.map((item,index) => {

        const active = index === activeId ? 'active' : ''

        return (
            <Fragment key={item.title}>
                <div className={`title ${ active}`}  onClick={()=>handleClick(index)}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${ active}`}>
                    {item.content}
                </div>

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