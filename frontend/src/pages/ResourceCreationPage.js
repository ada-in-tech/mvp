import React from 'react';
import '../styles/components.css'; // Assuming existing styles

const ResourceCreationPage = () => {
    return (
        <div className="resource-creation-container">
            <h2>Create a New Resource</h2>
            <form className="resource-form">
                <div className="input-field">
                    <label>Resource Title</label>
                    <input type="text" placeholder="Enter resource title" />
                </div>
                <div className="input-field">
                    <label>Description</label>
                    <textarea placeholder="Describe the resource"></textarea>
                </div>
                <div className="input-field">
                    <label>Resource Link</label>
                    <input type="text" placeholder="Enter link to the resource" />
                </div>
                <div className="button-container">
                    <button type="submit" className="button">Create Resource</button>
                </div>
            </form>
        </div>
    );
};

export default ResourceCreationPage;
