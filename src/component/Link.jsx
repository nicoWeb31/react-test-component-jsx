import React, { Children } from 'react'


const Link = ({href,className,children}) => {

    const onClick = (e) =>{
        if(e.metaKey || e.ctrKey){
            return;
        }
        e.preventDefault();

        // change the url
        window.history.pushState({},'',href)

        const navEvent = new PopStateEvent('popState');
        window.dispatchEvent(navEvent)
    }

    return (
        <a onClick={onClick} className={className} href={href} >{children}</a>
    );
}

export default Link;