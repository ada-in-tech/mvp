import React from 'react';
import Card from '../../components/cards/Card';
import CommunityFeed from '../../components/common/CommunityFeed';
import { communityFeeds, currentMentees, potentialMentees, advancedWorkshops, submittedCourses } from '../../mockData';

const ProfessionalDashboard = () => {
    return (
        <div className="dashboard">
            {/* Current Mentees Section */}
            <section className="my-6">
                <h2 className="text-2xl font-semibold mb-4">Current Mentees</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {currentMentees.map(mentee => (
                        <Card key={mentee.id} item={mentee} className="mentor-card" />
                    ))}
                </div>
            </section>

            {/* Potential Mentees Section */}
            <section className="my-6">
                <h2 className="text-2xl font-semibold mb-4">Potential Mentees</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {potentialMentees.map(mentee => (
                        <Card key={mentee.id} item={mentee} className="mentor-card" />
                    ))}
                </div>
            </section>

            {/* Advanced Workshops Section */}
            <section className="my-6">
                <h2 className="text-2xl font-semibold mb-4">Advanced Workshops</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {advancedWorkshops.map(workshop => (
                        <Card key={workshop.id} item={workshop} className="course-card" />
                    ))}
                </div>
            </section>

            {/* Submitted Courses Section */}
            <section className="my-6">
                <h2 className="text-2xl font-semibold mb-4">Your Submitted Courses</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {submittedCourses.map(course => (
                        <Card key={course.id} item={course} className="job-card" />
                    ))}
                </div>
            </section>

            {/* Community Insights Section */}
            <section className="my-6">
                <h2 className="text-2xl font-semibold mb-4">Community Insights</h2>
                <CommunityFeed feeds={communityFeeds} />
            </section>
        </div>
    );
};

export default ProfessionalDashboard;
