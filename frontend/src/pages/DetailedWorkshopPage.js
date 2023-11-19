import React from 'react';
import { useParams } from 'react-router-dom';
import { detailedWorkshops } from '../mockData';
import '../styles/card.css'; // Import existing CSS

const DetailedWorkshopPage = () => {
    const { workshopId } = useParams();
    const workshop = detailedWorkshops.find(w => w.id.toString() === workshopId);

    if (!workshop) return <div className="card">Workshop not found</div>;

    return (
        <div className="card">
            <h1 className="card-title">{workshop.title}</h1>
            <img src={workshop.imageUrl} alt={workshop.title} className="card-image" />
            <p className="card-body">{workshop.description}</p>
            <ul>
                {workshop.agenda.map((session, index) => (
                    <li key={index}>{session}</li>
                ))}
            </ul>
        </div>
    );
};

export default DetailedWorkshopPage;
