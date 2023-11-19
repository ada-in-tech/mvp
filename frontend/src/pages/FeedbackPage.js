import React from 'react';
import '../styles/components.css';

const FeedbackPage = () => {
    return (
        <div className="feedback-page">
            <h1>Feedback</h1>
            <form>
                <select>
                    <option value="general">General Feedback</option>
                    <option value="bug">Bug Report</option>
                    <option value="feature">Feature Request</option>
                </select>
                <textarea placeholder="Your feedback" />
                <input type="email" placeholder="Your email (optional)" />
                <button type="submit">Submit Feedback</button>
            </form>
        </div>
    );
};

export default FeedbackPage;
