import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputField from '../components/form/InputField';
import Button from '../components/common/Button';
import '../styles/auth.css';
import { loginUser } from '../services/userService'; // Adjust the import path as needed

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await loginUser(formData);
            // Handle login success, store token, navigate to home or dashboard
            navigate('/home'); // Adjust the redirect route as needed
        } catch (error) {
            console.error('Login error:', error.message);
            // Optionally, show error to the user
        }
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
                    Don't have an account? <Link to="/signup" style={{ color: '#0077b6' }}>Sign Up</Link>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;
