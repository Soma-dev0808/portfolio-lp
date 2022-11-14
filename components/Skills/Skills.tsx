import React from "react";
import Image from "next/image";
import indexStyles from "../../styles/index.module.css";
import skillStyles from "../../styles/skill.module.css";
import SectionLayout from "../SectionLayout";
import Skill from "./Skill";
import portfolioData from '../utils/portfolioData';

// Skills section
const Skills = () => {
  const { skillSets } = portfolioData;
  return (
    <SectionLayout>
      <h2 className={indexStyles.sectionTitle}>Skills</h2>
      <div className={skillStyles.skills}>

        {skillSets.map(skill => (
          <Skill
            key={skill.skillId}
            skillId={skill.skillId}
            skillImg={skill.skillImg}
            skillTitle={skill.skillTitle}
            skillDesc={skill.skillDesc}
          />
        ))}
      </div>
    </SectionLayout>
  );
};

export default Skills;
