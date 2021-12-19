import React from 'react'
import {Link} from 'react-router-dom';

function Navigation() {
    return (
        <nav className='navbar navbar-expand bg-light navbar-light'>
            <Link to={'/Homepage'} className='navbar-brand'>News App</Link>
        </nav>
    )
}

export default Navigation
