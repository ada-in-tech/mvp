import React from 'react';
import Card from '../../components/cards/Card';
import CommunityFeed from '../../components/common/CommunityFeed';
import { events, resources, collaborations, communityPosts, groupProfile } from '../../mockData'; // Mock data

const CommunityDashboard = () => {
    return (
        <div className="dashboard">
            <section className="events">
                <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {events.map(event => (
                        <Card key={event.id} item={event} />
                    ))}
                </div>
            </section>

            <section className="resources">
                <h2 className="text-2xl font-semibold mb-4">Resources</h2>
                {resources.map(resource => (
                    <Card key={resource.id} item={resource} />
                ))}
            </section>

            <section className="collaborations">
                <h2 className="text-2xl font-semibold mb-4">Collaboration Opportunities</h2>
                {collaborations.map(collaboration => (
                    <Card key={collaboration.id} item={collaboration} />
                ))}
            </section>

            <section className="community-posts">
                <h2 className="text-2xl font-semibold mb-4">Community Insights</h2>
                <CommunityFeed feeds={communityPosts} />
            </section>

            <section className="group-profile">
                <Card item={groupProfile} />
            </section>
        </div>
    );
};

export default CommunityDashboard;
