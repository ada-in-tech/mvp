import React from 'react';
import '../styles/components.css'; // Assuming existing styles

const CampaignCreationPage = () => {
    return (
        <div className="campaign-creation-container">
            <h2>Create a New Campaign</h2>
            <form className="campaign-form">
                <div className="input-field">
                    <label>Campaign Title</label>
                    <input type="text" placeholder="Enter campaign title" />
                </div>
                <div className="input-field">
                    <label>Description</label>
                    <textarea placeholder="Enter campaign description"></textarea>
                </div>
                <div className="input-field">
                    <label>Target Date</label>
                    <input type="date" />
                </div>
                <div className="button-container">
                    <button type="submit" className="button">Create Campaign</button>
                </div>
            </form>
        </div>
    );
};

export default CampaignCreationPage;
