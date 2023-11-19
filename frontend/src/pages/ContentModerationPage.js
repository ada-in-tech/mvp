import React from 'react';
import Table from '../components/common/Table'; // Assuming this component exists
import { contentToModerate } from '../mockData'; // Your mock data

const ContentModerationPage = () => {
    return (
        <div className="auth-container">
            <h2 className="heading-2">Content Moderation</h2>
            <Table data={contentToModerate} columns={['Title', 'Author', 'Status', 'Actions']} />
            {/* Add action buttons as needed */}
        </div>
    );
};

export default ContentModerationPage;
