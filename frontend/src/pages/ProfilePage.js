import React from 'react';
import '../styles/components.css';

const ProfilePage = () => {
    // Mock user data - replace with real data
    const user = {
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        bio: 'Front-end Developer with a passion for responsive design.',
        skills: ['HTML', 'CSS', 'JavaScript', 'React']
    };

    return (
        <div className="auth-container">
            <div className="profile">
                <h1 className="heading-1">{user.name}</h1>
                <p className="paragraph"><strong>Email:</strong> {user.email}</p>
                <p className="paragraph"><strong>Bio:</strong> {user.bio}</p>
                <p className="paragraph"><strong>Skills:</strong> {user.skills.join(', ')}</p>
                <button className="button">Edit Profile</button>
            </div>
        </div>
    );
};

export default ProfilePage;
