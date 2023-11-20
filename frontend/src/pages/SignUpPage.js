import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import InputField from '../components/form/InputField';
import SelectField from '../components/form/SelectField';
import Button from '../components/common/Button';
import '../styles/auth.css';

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        userRole: '',
    });

    const userRoles = [
        { label: 'Newcomer to Tech', value: 'newcomer' },
        { label: 'Established Tech Professional', value: 'professional' },
        { label: 'Tech Company', value: 'company' },
        { label: 'Community/Advocacy Group', value: 'community' },
    ];

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle form submission
        navigate('/verify-email'); // Redirect to email verification page
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <InputField
                    label="Full Name or Company Name"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                />
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
                <InputField
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
                <SelectField
                    label="I am a"
                    name="userRole"
                    value={formData.userRole}
                    onChange={handleChange}
                    options={userRoles}
                />
                <Button type="submit">Register</Button>
                <p>
                    Already have an account? <Link to="/login" style={{ color: '#0077b6' }}>Login</Link> {/* Adjust the color as needed */}
                </p>
            </form>
        </div>
    );
};

export default SignUpPage;
