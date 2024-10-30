
import React from 'react';

const Title = ({ title, description }) => {
    return (
        <div className="title-section">
            <h2 className="title">{title}</h2>
            <p className="title-description">{description}</p>
        </div>
    );
};

export default Title;
