import React from 'react';
import { useParams } from 'react-router-dom';
import { detailedCourses } from '../mockData';
import '../styles/card.css'; // Import existing CSS

const DetailedCoursePage = () => {
    const { courseId } = useParams();
    const course = detailedCourses.find(c => c.id.toString() === courseId);

    if (!course) return <div className="card">Course not found</div>;

    return (
        <div className="card">
            <h1 className="card-title">{course.title}</h1>
            <img src={course.imageUrl} alt={course.title} className="card-image" />
            <p className="card-body">{course.description}</p>
            <ul>
                {course.content.map((chapter, index) => (
                    <li key={index}>{chapter}</li>
                ))}
            </ul>
        </div>
    );
};

export default DetailedCoursePage;
