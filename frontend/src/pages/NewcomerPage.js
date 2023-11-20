import React, { useState } from 'react';
import Card from '../components/cards/Card'; // Adjust path as needed
import Filter from '../components/common/Filter'; // Component for filtering
import { newcomers } from '../mockData'; // Replace with your data fetching logic

const NewcomerPage = () => {
    const [filterValue, setFilterValue] = useState('');

    const handleFilterChange = (value) => {
        setFilterValue(value);
    };

    const filteredNewcomers = newcomers.filter(
        newcomer => newcomer.name.toLowerCase().includes(filterValue.toLowerCase())
    );

    return (
        <div className="newcomer-page">
            <h1>Newcomers</h1>
            <Filter onChange={handleFilterChange} options={[{ value: '', label: 'All' }, /* Add more filter options */]} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {filteredNewcomers.map(newcomer => (
                    <Card key={newcomer.id} item={newcomer} className="newcomer-card" />
                ))}
            </div>
        </div>
    );
};

export default NewcomerPage;
