import React from 'react';
import '../styles/components.css';

const SettingsPage = () => {
    return (
        <div className="auth-container">
            <div className="settings">
                <h1 className="heading-1">Account Settings</h1>
                <form className="auth-form">
                    {/* Email and password change form */}
                    <label className="input-field">
                        <span>New Email</span>
                        <input type="email" />
                    </label>
                    <label className="input-field">
                        <span>New Password</span>
                        <input type="password" />
                    </label>
                    <button className="button" type="submit">Update Account</button>
                </form>

                <div className="notification-settings">
                    <h2 className="heading-2">Notification Settings</h2>
                    <label className="checkbox-field">
                        <input type="checkbox" />
                        Email Notifications
                    </label>
                </div>

                <div className="privacy-settings">
                    <h2 className="heading-2">Privacy Settings</h2>
                    <label className="checkbox-field">
                        <input type="checkbox" />
                        Make Profile Public
                    </label>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
