import React from 'react';
import Card from '../../components/cards/Card';
import CompanyProfileCard from '../../components/cards/CompanyProfileCard';
import CommunityFeed from '../../components/common/CommunityFeed';
import { communityFeeds, jobPostings, talentSearchResults, collaborationOpportunities, companyEvents, companyProfile } from '../../mockData';

const CompanyDashboard = () => {
    return (
        <div className="dashboard">
            {/* Job Postings Section */}
            <section className="job-postings">
                <h2 className="dashboard-title">Job Postings</h2>
                {jobPostings.map(job => (
                    <Card key={job.id} item={job} />
                ))}
            </section>

            {/* Talent Search Section */}
            <section className="talent-search">
                <h2 className="dashboard-title">Talent Search</h2>
                {talentSearchResults.map(profile => (
                    <Card key={profile.id} item={profile} />
                ))}
            </section>

            {/* Collaboration Opportunities */}
            <section className="collaborations">
                <h2 className="dashboard-title">Collaboration Opportunities</h2>
                {collaborationOpportunities.map(opportunity => (
                    <Card key={opportunity.id} item={opportunity} />
                ))}
            </section>

            {/* Events Section */}
            <section className="events">
                <h2 className="dashboard-title">Your Events</h2>
                {companyEvents.map(event => (
                    <Card key={event.id} item={event} />
                ))}
            </section>

            <section className="company-profile">
                <h2 className="dashboard-title">Company Profile</h2>
                <CompanyProfileCard
                    name={companyProfile.name}
                    description={companyProfile.description}
                    location={companyProfile.location}
                    imageUrl={companyProfile.imageUrl}
                />
            </section>

            {/* Community Feed */}
            <section className="community-feed">
                <h2 className="text-2xl font-bold mb-4">Community Feed</h2>
                <CommunityFeed feeds={communityFeeds} />
            </section>
        </div>
    );
};

export default CompanyDashboard;
