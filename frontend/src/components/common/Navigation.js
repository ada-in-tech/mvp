import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className="navigation">
            <Link to="/">Home</Link>
            {/* Add more links as needed */}
        </nav>
    );
};

export default Navigation;
