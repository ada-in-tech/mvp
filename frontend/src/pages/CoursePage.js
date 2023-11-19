import React, { useState } from 'react';
import CourseCard from '../components/cards/CourseCard'; // Adjust path as needed
import Filter from '../components/common/Filter'; // Component for filtering
import { courses } from '../mockData'; // Replace with your data fetching logic

const CoursePage = () => {
    // Logic for handling filters and state
    const [filterValue, setFilterValue] = useState('');

    const handleFilterChange = (value) => {
        setFilterValue(value);
    };

    const filteredCourses = courses.filter(
        workshop => workshop.title.toLowerCase().includes(filterValue.toLowerCase())
    );

    return (
        <div>
            <h1>Courses</h1>
            <Filter onChange={handleFilterChange} options={[{ value: '', label: 'All' }, /* Add more filter options */]} />
            <div>
                {filteredCourses.map(workshop => (
                    <CourseCard key={workshop.id} {...workshop} />
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {courses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default CoursePage;
