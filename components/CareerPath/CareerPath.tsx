import React from 'react';
import SectionLayout from '../SectionLayout';
import portfolioData from '../utils/portfolioData';
import Career from './Career';
import indexStyles from '../../styles/index.module.css';
import careerPathStyle from '../../styles/careerPath.module.css';

const CareerPath = () => {
    return (
        <SectionLayout>
            <h2 className={indexStyles.sectionTitle}>Where I’ve Worked</h2>
            <div className={careerPathStyle.steps}>
                {
                    portfolioData.careerSets.map(c => (
                        <Career
                            key={c.companyName}
                            companyName={c.companyName}
                            companyLocation={c.companyLocation}
                            position={c.position}
                            workDetails={c.workDetails}
                            date={c.date}
                        />
                    ))
                }
            </div>
        </SectionLayout>
    );
};

export default CareerPath;
