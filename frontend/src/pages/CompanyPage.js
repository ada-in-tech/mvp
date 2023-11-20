import React from 'react';
import Card from '../components/cards/Card';
import { companies } from '../mockData';

const CompanyPage = () => {
    return (
        <div className="company-page">
            <h1>Companies</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {companies.map(company => (
                    <Card key={company.id} item={company} className="company-card" />
                ))}
            </div>
        </div>
    );
};

export default CompanyPage;
