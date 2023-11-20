import React from 'react';
import Card from '../components/cards/Card';
import { resources1 } from '../mockData';

const ResourcePage = () => {
    return (
        <div className="resource-page">
            <h1>Resources</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {resources1.map(resource => (
                    <Card key={resource.id} item={resource} className="resource-card" />
                ))}
            </div>
        </div>
    );
};

export default ResourcePage;
