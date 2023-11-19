import React from 'react';
import { jobListings } from '../mockData';
import Card from '../components/cards/Card';
import '../styles/components.css';

const JobListingsPage = () => {
    return (
        <div className="job-listings-page">
            <h1>Job Listings</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {jobListings.map(job => (
                    <Card key={job.id} item={job} className="job-card" />
                ))}
            </div>
        </div>
    );
};

export default JobListingsPage;
