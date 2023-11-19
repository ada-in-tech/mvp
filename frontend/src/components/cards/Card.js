// src/components/cards/Card.js
import React from 'react';
import '../../styles/card.css';

const Card = ({ item }) => {
    const { title, description, imageUrl, company, location, name, expertise } = item;

    return (
        <div className="card">
            {imageUrl && <img src={imageUrl} alt={title || name} className="card-image" />}
            <div className="p-4">
                <h3 className="card-title">{title || name}</h3>
                <p className="card-description">{description || expertise}</p>
                {company && <p className="card-company">{company}</p>}
                {location && <p className="card-location">{location}</p>}
            </div>
        </div>
    );
};

export default Card;
