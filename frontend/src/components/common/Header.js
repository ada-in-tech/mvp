import React, { useState } from 'react';
import Navigation from './Navigation';
import '../../styles/components.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const userType = 'professional'; // Adjust based on user authentication
    const isSignedIn = true; // Dynamically set based on user authentication status

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <header className="header">
            <div className="logo">ADA IN TECH</div>
            <button className="hamburger" onClick={toggleMenu}>
                {/* Hamburger Icon */}
                <span>☰</span>
            </button>
            <nav className={`navigation ${isMenuOpen ? 'expanded' : ''}`}>
                <Navigation userType={isSignedIn ? userType : 'guest'} />
            </nav>
        </header>
    );
};

export default Header;
