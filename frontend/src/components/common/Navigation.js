import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components.css';

const Navigation = () => {
    return (
        <nav className="navigation">
            <Link to="/">ADA IN TECH</Link>
            <Link to="/signup" className="cta-link">Sign Up</Link>
            <Link to="/login" className="cta-link">Login</Link>
            <Link to="/verify-email" className="cta-link">Verify Email</Link>
            <Link to="/newcomer-dashboard" className="cta-link">Newcomer Dashboard</Link>
            <Link to="/professional-dashboard" className="cta-link">Professional Dashboard</Link>
            <Link to="/company-dashboard" className="cta-link">Company Dashboard</Link>
            <Link to="/community-dashboard" className="cta-link">Community Dashboard</Link>
            <Link to="/admin-dashboard" className="cta-link">Admin Dashboard</Link>
            {/* Add more links as needed */}
        </nav>
    );
};

export default Navigation;
