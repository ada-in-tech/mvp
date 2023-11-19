import React, { useState } from 'react';
import WorkshopCard from '../components/cards/WorkshopCard'; // Adjust path as needed
import Filter from '../components/common/Filter'; // Component for filtering
import { workshops } from '../mockData'; // Replace with your data fetching logic

const WorkshopPage = () => {
    // Logic for handling filters and state
    const [filterValue, setFilterValue] = useState('');

    const handleFilterChange = (value) => {
        setFilterValue(value);
    };

    const filteredWorkshops = workshops.filter(
        workshop => workshop.title.toLowerCase().includes(filterValue.toLowerCase())
    );

    return (
        <div>
            <h1>Workshops</h1>
            <Filter onChange={handleFilterChange} options={[{ value: '', label: 'All' }, /* Add more filter options */]} />
            <div>
                {filteredWorkshops.map(workshop => (
                    <WorkshopCard key={workshop.id} {...workshop} />
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {workshops.map(workshop => (
                    <WorkshopCard key={workshop.id} workshop={workshop} />
                ))}
            </div>
        </div>
    );
};

export default WorkshopPage;
