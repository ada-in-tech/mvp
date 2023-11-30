import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../components/cards/Card';
import CommunityFeed from '../../components/common/CommunityFeed';
import '../../styles/components.css';

const ProfessionalDashboard = () => {
    const [currentMentees, setCurrentMentees] = useState([]);
    const [potentialMentees, setPotentialMentees] = useState([]);
    const [advancedWorkshops, setAdvancedWorkshops] = useState([]);
    const [submittedCourses, setSubmittedCourses] = useState([]);
    const [communityFeeds, setCommunityFeeds] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const menteesResponse = await axios.get('/api/mentees');
                setCurrentMentees(menteesResponse.data.current);
                setPotentialMentees(menteesResponse.data.potential);
                // Fetch advanced workshops, submitted courses, and community feeds similarly
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="dashboard">
            <section className="my-6">
                <h2 className="text-2xl font-semibold mb-4">Current Mentees</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {currentMentees.map(mentee => (
                        <Card key={mentee.id} item={mentee} className="mentor-card" />
                    ))}
                </div>
            </section>
            <section className="my-6">
                <h2 className="text-2xl font-semibold mb-4">Mentor Connections</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {potentialMentees.map(mentee => (
                        <Card key={mentee.id} item={mentee} className="mentor-card" />
                    ))}
                </div>
            </section>
            <section className="my-6">
                <h2 className="text-2xl font-semibold mb-4">Advanced Workshops</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {advancedWorkshops.map(workshop => (
                        <Card key={workshop.id} item={workshop} className="course-card" />
                    ))}
                </div>
            </section>
            <section className="my-6">
                <h2 className="text-2xl font-semibold mb-4">Your Submitted Courses</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {submittedCourses.map(course => (
                        <Card key={course.id} item={course} className="job-card" />
                    ))}
                </div>
            </section>
            <section className="my-6">
                <h2 className="text-2xl font-semibold mb-4">Community Insights</h2>
                <CommunityFeed feeds={communityFeeds} />
            </section>
        </div>
    );
};

export default ProfessionalDashboard;
