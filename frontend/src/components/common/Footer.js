import React from 'react';
import '../../styles/components.css';

const Footer = () => {
    return (
        <footer className="footer p-6 bg-primary-color text-white">
            <div className="grid md:grid-cols-4 gap-4">
                {/* About Section */}
                <div>
                    <h5 className="font-bold mb-2">About Ada in Tech</h5>
                    <p>Dedicated to empowering women in technology fields.</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h5 className="font-bold mb-2">Quick Links</h5>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/features">Features</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/profile">Profile</a></li> {/* Link to Profile page */}
                        <li><a href="/settings">Settings</a></li> {/* Link to Settings page */}
                        <li><a href="/campaign-creation">Campaign Creation</a></li> {/* Link to Campaign Creation page */}
                        <li><a href="/content-moderation">Content Moderation</a></li> {/* Link to Content Moderation page */}
                        <li><a href="/reports-feedback">Reports and Feedback</a></li> {/* Link to Reports and Feedback page */}
                        {/* Add more links as needed */}
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h5 className="font-bold mb-2">Pages</h5>
                    <ul>
                        <li><a href="/courses">Courses</a></li> {/* Link to Courses page */}
                        <li><a href="/workshops">Workshops</a></li> {/* Link to Workshops page */}
                        <li><a href='/courses/101'>DetailedCoursePage</a></li>
                        <li><a href='/workshops/201'>DetailedWorkshopPage</a></li>
                        <li><a href="/job-listings">Job Listings</a></li> {/* Link to Job Listings page */}
                        <li><a href="/feedback">Feedback</a></li> {/* Link to Feedback page */}
                        <li><a href="/report-incident">Report Incident</a></li> {/* Link to Report Incident page */}
                        {/* Add more links as needed */}
                    </ul>
                </div>

                {/* Contact Us */}
                <div>
                    <h5 className="font-bold mb-2">Contact Us</h5>
                    <p>Email: info@adaintech.com</p>
                    {/* Add more contact info if needed */}
                </div>

                {/* Social Media Links */}
                <div>
                    <h5 className="font-bold mb-2">Follow Us</h5>
                    <ul>
                        <li><a href="https://www.linkedin.com">LinkedIn</a></li>
                        <li><a href="https://www.linkedin.com">Twitter</a></li>
                        <li><a href="https://www.linkedin.com">Facebook</a></li>
                        {/* Add more social media links */}
                    </ul>
                </div>
            </div>
            <div className="text-center mt-4">
                <p>© 2023 Ada in Tech. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
