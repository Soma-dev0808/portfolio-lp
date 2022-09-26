import React from 'react';
import Image from 'next/image';
import indexStyles from '../../styles/index.module.css';
import skillStyles from '../../styles/skill.module.css';


// Skills section
const Skills = () => {
    return (
        <section className={indexStyles.sections}>
            <div className={indexStyles.wrapper}>
                <h2 className={indexStyles.sectionTitle}>Skills</h2>
                <div className={skillStyles.skills}>
                    {/* Skill1 */}
                    <div className={skillStyles.skill}>
                        <div className={skillStyles.langImage}>
                            <Image
                                src='/assets/reactjs.png'
                                alt="reactjs logo"
                                width={70} // Responsive にする60px
                                height={70}
                                layout='fixed'
                                className={skillStyles.langIcon}
                            />
                        </div>
                        <div className={skillStyles.skillDescription}>
                            <h4 className={skillStyles.skillName}> React.js(ts)</h4>
                            <p>
                                In most of projects, I have used React.js, and have built web applications using class
                                components
                                or functional components. Also I mainly use redux to manage states.
                                Create custom hooks is my fun part of web developing.
                                Currenlty, I&apos;m study typescript to work in a big project in the future.
                            </p>
                        </div>
                    </div>

                    {/* Skill2 */}
                    <div className={skillStyles.skill}>
                        <div className={skillStyles.langImage}>
                            <Image
                                src="/assets/nextjs.png"
                                alt="nextjs logo"
                                width={70}
                                height={70}
                                layout='fixed'
                            />
                        </div>

                        <div className={skillStyles.skillDescription}>
                            <h4 className={skillStyles.skillName}>Next.js</h4>
                            <p>
                                My previous company mainly used next.js to handle SSG and SSR. I worked with them and
                                developed both SSG and SSR pages.
                                I also use next.js in my personal project, and this landing page is created by next.js.
                            </p>
                        </div>
                    </div>

                    {/* Skill3 */}
                    <div className={skillStyles.skill}>
                        <div className={skillStyles.langImage}>
                            <Image
                                src="/assets/nodejs.png"
                                alt="nodejs logo"
                                width={70}
                                height={70}
                                layout='fixed'
                            />
                        </div>
                        <div className={skillStyles.skillDescription}>
                            <h4 className={skillStyles.skillName}>Node.js</h4>
                            <p>
                                I have created some web applications with node.js in my previous company. Have
                                experiences of integrating
                                third party authentication and push notification api.
                            </p>
                        </div>
                    </div>

                    {/* Skill4 */}
                    <div className={skillStyles.skill}>
                        <div className={skillStyles.langImage}>
                            <Image
                                src="/assets/php.png"
                                alt="php logo"
                                width={70}
                                height={70}
                                layout='fixed'
                            />
                        </div>
                        <div className={skillStyles.skillDescription}>
                            <h4 className={skillStyles.skillName}>PHP</h4>
                            <p>
                                I have worked on some projects using PHP(mainly Lalavel). Developed with mysql DB and
                                created multiple queries to create api for EC site.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;