import React, { useState } from 'react';
import Card from '../components/cards/Card'; // Adjust path as needed
import Filter from '../components/common/Filter'; // Component for filtering
import { mentors } from '../mockData'; // Replace with your data fetching logic

const MentorPage = () => {
    const [filterValue, setFilterValue] = useState('');

    const handleFilterChange = (value) => {
        setFilterValue(value);
    };

    const filteredMentors = mentors.filter(
        mentor => mentor.name.toLowerCase().includes(filterValue.toLowerCase())
    );

    return (
        <div className="mentor-page">
            <h1>Mentors</h1>
            <Filter onChange={handleFilterChange} options={[{ value: '', label: 'All' }, /* Add more filter options */]} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {filteredMentors.map(mentor => (
                    <Card key={mentor.id} item={mentor} className="mentor-card" />
                ))}
            </div>
        </div>
    );
};

export default MentorPage;
