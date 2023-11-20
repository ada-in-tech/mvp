import React from 'react';
import Card from '../components/cards/Card'; // Assuming existing Card component
import { collaborations1 } from '../mockData'; // Mock data for collaborations

const CollaborationPage = () => {
    return (
        <div className="collaboration-page">
            <h1>Collaborations</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {collaborations1.map(collab => (
                    <Card key={collab.id} item={collab} className="collaboration-card" />
                ))}
            </div>
        </div>
    );
};

export default CollaborationPage;
