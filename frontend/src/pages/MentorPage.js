import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/cards/Card';
import Filter from '../components/common/Filter';
import '../styles/components.css';

const MentorPage = () => {
    const [mentors, setMentors] = useState([]);
    const [filterValue, setFilterValue] = useState('');

    useEffect(() => {
        const fetchMentors = async () => {
            try {
                const response = await axios.get('/api/mentors');
                setMentors(response.data);
            } catch (error) {
                console.error('Error fetching mentors:', error.message);
                // Optionally, handle error (e.g., showing an error message)
            }
        };

        fetchMentors();
    }, []);

    const handleFilterChange = (value) => {
        setFilterValue(value);
    };

    const filteredMentors = mentors.filter(
        mentor => mentor.name.toLowerCase().includes(filterValue.toLowerCase())
    );

    return (
        <div className="mentor-page">
            <h1>Mentors</h1>
            <Filter onChange={handleFilterChange} options={[{ value: '', label: 'All' }]} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {filteredMentors.map(mentor => (
                    <Card key={mentor.id} item={mentor} className="mentor-card" />
                ))}
            </div>
        </div>
    );
};

export default MentorPage;
