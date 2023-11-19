import React from 'react';
import Button from '../components/common/Button';
import '../styles/auth.css';

const EmailVerificationPage = () => {
    // Add logic for handling email verification

    return (
        <div className="auth-container">
            <h1>Email Verification</h1>
            <p>Please check your email to verify your account.</p>
            <Button onClick={() => {/* Add logic to resend verification email */ }}>
                Resend Email
            </Button>
        </div>
    );
};

export default EmailVerificationPage;
