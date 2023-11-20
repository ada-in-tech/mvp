import React from 'react';
import Card from '../components/cards/Card';
import { communityGroups } from '../mockData';

const CommunityPage = () => {
    return (
        <div className="community-page">
            <h1>Community Groups</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {communityGroups.map(group => (
                    <Card key={group.id} item={group} className="community-card" />
                ))}
            </div>
        </div>
    );
};

export default CommunityPage;
