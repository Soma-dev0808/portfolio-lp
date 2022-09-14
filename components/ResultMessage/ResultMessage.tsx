import React from 'react'
import { APIReturnType } from '../utils/utils'
import resultMessageStyles from '../../styles/resultMessage.module.css';

const ResultMessage: React.FC<{ resultStat: APIReturnType }> = ({ resultStat }) => {
    const isSuccess = resultStat === 'success' ? true : false;

    const messageTitle = isSuccess
        ? 'Thank you for contacting me.'
        : 'Someting error occured.';
    const message = isSuccess
        ? `I'll read your message and get back to you soon!`
        : `Sorry, There's something wrong with a system. 
        Please try again.`;

    return (
        <div className={`${resultMessageStyles.container} ${!isSuccess && resultMessageStyles.error}`}>
            <h3 className={resultMessageStyles.messageTitle}>
                {messageTitle}
            </h3>
            <p className={resultMessageStyles.message}>
                {message}
            </p>
        </div>
    )
}

export default ResultMessage