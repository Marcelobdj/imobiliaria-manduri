
// src/components/Title.js

import React from 'react';

const Title = ({ title, description }) => {
    return (
        <div className="title-section">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Title;
