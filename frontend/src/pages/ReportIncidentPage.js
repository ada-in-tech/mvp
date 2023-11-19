import React from 'react';
import '../styles/components.css';

const ReportIncidentPage = () => {
    return (
        <div className="report-incident-page">
            <h1>Report Incident</h1>
            <form>
                <textarea placeholder="Describe the incident" />
                <input type="date" />
                <input type="file" />
                <button type="submit">Submit Report</button>
            </form>
        </div>
    );
};

export default ReportIncidentPage;
