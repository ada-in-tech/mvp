import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../components/form/InputField';
import Button from '../components/common/Button';
import '../styles/auth.css';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement your login logic here
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <InputField
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <InputField
                    label="Password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <Button type="submit">Login</Button>
                <p>
                    Don't have an account? <Link to="/signup" style={{ color: '#0077b6' }}>Sign Up</Link> {/* Adjust the color as needed */}
                </p>
            </form>
        </div>
    );
};

export default LoginPage;
