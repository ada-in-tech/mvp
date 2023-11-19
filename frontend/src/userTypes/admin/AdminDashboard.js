import React from 'react';
import { users, content, analyticsData, events, feedbacks, collaborations, financials } from '../../mockData';
import Card from '../../components/cards/Card';
import Table from '../../components/common/Table';
import Chart from '../../components/common/Chart';
import './adminDashboard.css';

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard">
            {/* User Management Section */}
            <section className="user-management-section">
                <h2 className="section-title">Users</h2>
                <Table data={users} columns={['Name', 'Role', 'Email']} className="user-table" />
            </section>

            {/* Content Moderation Section */}
            <section className="content-moderation-section">
                <h2 className="section-title">Content Moderation</h2>
                <Table data={content} columns={['Title', 'Status']} className="content-table" />
            </section>

            {/* Analytics Section */}
            <section className="analytics-section">
                <h2 className="section-title">Analytics</h2>
                <Chart data={analyticsData} className="analytics-chart" />
            </section>

            {/* Event Management Section */}
            <section className="event-management-section">
                <h2 className="section-title">Events</h2>
                <Table data={events} columns={['Title', 'Date']} className="event-table" />
            </section>

            {/* Feedback and Support Section */}
            <section className="feedback-support-section">
                <h2 className="section-title">Feedback</h2>
                <Table data={feedbacks} columns={['User', 'Content']} className="feedback-table" />
            </section>

            {/* Collaboration Management Section */}
            <section className="collaboration-management-section">
                <h2 className="section-title">Collaborations</h2>
                {collaborations.map(collaboration => (
                    <Card key={collaboration.id} item={collaboration} />
                ))}
            </section>

            {/* Financial Management Section */}
            <section className="financial-management-section">
                <h2 className="section-title">Financials</h2>
                {financials && (
                    <Card
                        item={{
                            title: "Financial Overview",
                            content: `Total Revenue: $${financials.totalRevenue}`
                        }}
                    />
                )}
            </section>

            {/* Settings Section */}
            <section className="settings-section">
                <h2 className="section-title">Settings</h2>
                {/* Settings form */}
            </section>
        </div>
    );
};

export default AdminDashboard;
