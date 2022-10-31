import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h2>This is header</h2>
            <nav>
                <Link to='/'>Home</Link>
            </nav>
        </div>
    );
};

export default Header;