import React from 'react';
import '../styles/components.css'; // Assuming existing styles

const CourseCreationPage = () => {
    return (
        <div className="course-creation-container">
            <h2>Create a New Course</h2>
            <form className="course-form">
                <div className="input-field">
                    <label>Course Title</label>
                    <input type="text" placeholder="Enter course title" />
                </div>
                <div className="input-field">
                    <label>Description</label>
                    <textarea placeholder="Enter course description"></textarea>
                </div>
                <div className="input-field">
                    <label>Course Content</label>
                    <textarea placeholder="Outline the course content"></textarea>
                </div>
                <div className="button-container">
                    <button type="submit" className="button">Create Course</button>
                </div>
            </form>
        </div>
    );
};

export default CourseCreationPage;
