import React, { useRef } from 'react';
import careerPathStyle from '../../styles/careerPath.module.css';
import useScroll from '../utils/useScroll';

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
    const ref = useRef<HTMLDivElement>(null);
    const [_, isPartiallyVisible, isElDesiredPosition] = useScroll(ref, 40);

    const wdLstFullyVisible = (isPartiallyVisible && isElDesiredPosition) && careerPathStyle.expandWorkDetailList;
    const expandContentBorder = (isPartiallyVisible && isElDesiredPosition) && careerPathStyle.expandContentBorder;
    const dateFullyVisible = (isPartiallyVisible && isElDesiredPosition) && careerPathStyle.dateFullyVisible;


    return (
        <div ref={ref} className={`${careerPathStyle.stepsContainer} ${expandContentBorder}`}>
            <div className={`${careerPathStyle.content} ${wdLstFullyVisible}`}>
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
            </div>
            <i className={careerPathStyle.stepLine}></i>
            <div className={`${careerPathStyle.date} ${dateFullyVisible}`}>{date}</div>
        </div>
    );
};

export type { CareerProps };
export default Career;
