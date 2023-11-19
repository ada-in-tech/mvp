// src/userTypes/newcomer/NewcomerDashboard.js
import React from 'react';
import Card from '../../components/cards/Card';
import CommunityFeed from '../../components/common/CommunityFeed';
import { courses, jobs, mentors, communityFeeds } from '../../mockData';

const NewcomerDashboard = () => {
    return (
        <div className="dashboard">
            {/* Courses Section */}
            <section className="courses">
                <h2 className="text-2xl font-bold mb-4">Recommended Courses</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {courses.map((course) => (
                        <Card
                            key={course.id}
                            className="course-card"
                            item={course}
                        />
                    ))}
                </div>
            </section>

            {/* Job Listings Section */}
            <section className="job-listings">
                <h2 className="text-2xl font-bold mb-4">Job Listings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {jobs.map((job) => (
                        <Card
                            key={job.id}
                            className="job-card"
                            item={job}
                        />
                    ))}
                </div>
            </section>

            {/* Mentors Section */}
            <section className="mentors">
                <h2 className="text-2xl font-bold mb-4">Mentors</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {mentors.map((mentor) => (
                        <Card
                            key={mentor.id}
                            className="mentor-card"
                            item={mentor}
                        />
                    ))}
                </div>
            </section>

            {/* Community Feed Section */}
            <section className="community-feed">
                <h2 className="text-2xl font-bold mb-4">Community Feed</h2>
                <CommunityFeed feeds={communityFeeds} />
            </section>
        </div>
    );
};

export default NewcomerDashboard;
