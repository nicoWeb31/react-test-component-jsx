import React from 'react';
import Link from './Link'


const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link href="/" className='item'>section</Link>
            <Link href="/widget" className='item'>widget</Link>
            <Link href="/pic" className='item'>pictures</Link>
            <Link href="/viewclass" className='item'>Class Comp</Link>
            <Link href="/songs" className='item'>Song</Link>


        </div>
    );
}

export default Header;