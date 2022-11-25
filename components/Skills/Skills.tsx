import React, { useRef } from "react";
import Image from "next/image";
import indexStyles from "../../styles/index.module.css";
import skillStyles from "../../styles/skill.module.css";
import SectionLayout from "../SectionLayout";
import Skill from "./Skill";
import portfolioData from '../utils/portfolioData';
import useScroll from "../utils/useScroll";

// Skills section
const Skills = () => {
  const { skillSets } = portfolioData;

  const ref = useRef<HTMLDivElement>(null);
  const [isFullyVisible] = useScroll(ref);

  const txtHighlight = isFullyVisible && skillStyles.skillsHighlighted;

  return (
    <SectionLayout>
      <h2 className={indexStyles.sectionTitle}>Skills</h2>
      <div className={`${skillStyles.skills} ${txtHighlight}`} ref={ref}>

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
