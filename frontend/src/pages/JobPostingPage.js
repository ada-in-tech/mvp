import React from 'react';
import '../styles/components.css'; // Assuming existing styles

const JobPostingPage = () => {
    return (
        <div className="job-posting-container">
            <h2>Create a Job Posting</h2>
            <form className="job-posting-form">
                <div className="input-field">
                    <label>Job Title</label>
                    <input type="text" placeholder="Enter job title" />
                </div>
                <div className="input-field">
                    <label>Description</label>
                    <textarea placeholder="Enter job description"></textarea>
                </div>
                <div className="input-field">
                    <label>Requirements</label>
                    <textarea placeholder="List job requirements"></textarea>
                </div>
                <div className="button-container">
                    <button type="submit" className="button">Post Job</button>
                </div>
            </form>
        </div>
    );
};

export default JobPostingPage;
