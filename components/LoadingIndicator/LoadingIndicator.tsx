import React from 'react';
import loadingStyles from '../../styles/loadingIndicator.module.css';

// You may use this in the future
const LoadingIndicator: React.FC = () => {
    return (
        <div className={loadingStyles.loadingIndicator} />
    );
};

export default LoadingIndicator;
