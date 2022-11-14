import React from "react";
import Image from "next/image";
import skillStyles from "../../styles/skill.module.css";

interface SkillProps {
    skillId: string;
    skillImg: string;
    skillTitle: string;
    skillDesc: string;
}

const Skill: React.FC<SkillProps> = ({
    skillId,
    skillImg,
    skillTitle,
    skillDesc
}) => {
    return (
        <div className={skillStyles.skillContainer}>
            <div className={skillStyles.skill}>
                <div className={skillStyles.langImage}>
                    <Image
                        src={skillImg}
                        alt={`${skillId} logo`}
                        width={70}
                        height={70}
                        layout="fixed"
                        className={skillStyles.langIcon}
                    />
                </div>
                <div className={skillStyles.skillDescription}>
                    <h4 className={skillStyles.skillName}>
                        {skillTitle}
                    </h4>
                    <p>
                        {skillDesc}
                    </p>
                </div>
            </div>
        </div>

    );
};

export type { SkillProps };
export default Skill;
