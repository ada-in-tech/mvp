import React from 'react';
import Table from '../components/common/Table'; // Assuming this component exists
import { reportsAndFeedback } from '../mockData'; // Your mock data

const ReportsFeedbackPage = () => {
    return (
        <div className="auth-container">
            <h2 className="heading-2">Reports and Feedback</h2>
            <Table data={reportsAndFeedback} columns={['User', 'Issue', 'Status', 'Actions']} />
            {/* Add action buttons as needed */}
        </div>
    );
};

export default ReportsFeedbackPage;
