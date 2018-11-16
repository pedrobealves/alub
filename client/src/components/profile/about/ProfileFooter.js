import React from 'react';

export default ({portfolio}) => {

    return (
        <a href={portfolio} className="social-item bg-primary" target="_blank" rel="noopener noreferrer" download>
            <i className="fas fa-file-pdf" aria-hidden="true"></i>
            Baixar
        </a>
    );
}

