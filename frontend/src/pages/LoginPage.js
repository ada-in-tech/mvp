import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputField from '../components/form/InputField';
import Button from '../components/common/Button';
import '../styles/auth.css';
import { loginUser } from '../services/userService';
import { useUser } from '../contexts/UserContext';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { login } = useUser();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await loginUser(formData);
            console.log("Login response data:", data); // Check the response data
            login(data); // Set user data in context
            navigate(`/${data.userRole}-dashboard`);
        } catch (error) {
            console.error('Login error:', error.message);
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
