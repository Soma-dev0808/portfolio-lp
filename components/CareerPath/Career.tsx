import React, { useState } from 'react';

import indexStyles from "../../styles/index.module.css";
import careerPathStyle from '../../styles/careerPath.module.css';

interface CareerProps {
    companyName: string;
    companyLocation: string;
    position: string;
    workDetails: string[];
    date: number;
}

const Career: React.FC<CareerProps> = ({
    companyName,
    companyLocation,
    position,
    workDetails,
    date
}) => {
    const [isFocus, setIsFocus] = useState<boolean>(false);

    const handleOnSeeMoreClick = () => {
        setIsFocus(prev => !prev);
    };

    const stepsContainerOnFocus = isFocus && careerPathStyle.stepsContainerFocus;
    const contentOnFocus = isFocus && careerPathStyle.contentFocus;

    return (
        <div className={`${careerPathStyle.stepsContainer} ${stepsContainerOnFocus}`}>
            <div className={`${careerPathStyle.content} ${contentOnFocus}`}>
                <h3>{position}</h3>
                <p className={careerPathStyle.companyInfo}>
                    <span className={careerPathStyle.companyName}>
                        @{companyName}
                    </span>
                    {' -'} {companyLocation}
                </p>
                <ul className={careerPathStyle.workDetailList}>
                    {workDetails.map((wd) => (
                        <li key={wd} className={careerPathStyle.workDetailListItem}>
                            {wd}
                        </li>
                    ))}
                </ul>

                <button
                    type='button'
                    className={`${indexStyles.button} ${careerPathStyle.seeMoreButton}`}
                    onClick={handleOnSeeMoreClick}
                >
                    {isFocus ? 'Hide' : 'See More'}
                </button>
            </div>
            <i className={careerPathStyle.stepLine}></i>
            <div className={`${careerPathStyle.date}`}>{date}</div>
        </div>
    );
};

export type { CareerProps };
export default Career;
