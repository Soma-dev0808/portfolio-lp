import React from 'react'
import loadingStyles from '../../styles/loader.module.css';

const LoadingIndicator: React.FC = () => {
    return (
        <div className={loadingStyles.loadingIndicator} />
    )
}

export default LoadingIndicator
