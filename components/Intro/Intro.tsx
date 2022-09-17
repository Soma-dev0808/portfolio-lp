import React from 'react';
import Image from 'next/image';
import indexStyles from '../../styles/index.module.css';
import introStyles from '../../styles/intro.module.css';
import { scrollToTargetId } from '../utils/utils';

// Introduction section
const Intro = () => {
    const handleScrollToPortfolios = () => scrollToTargetId('#portfolios');
    const handleScrollToContact = () => scrollToTargetId('#contact');

    return (
        <section className={`${indexStyles.sections} ${introStyles.imageBackground}`}>
            <div className={indexStyles.wrapper}>
                <div className={introStyles.introContainer}>
                    <div className={introStyles.introLeftSide}>
                        <div className={introStyles.profileImgContainer}>
                            <div className={introStyles.plofileImg}>
                            </div>
                        </div>
                    </div>
                    <div className={introStyles.introRightSide}>
                        <div className={introStyles.myTitle}> Frontend-developer </div>
                        <h1 className={introStyles.myName}> Soma Ikeda </h1>

                        {/* ここに自分の自己紹介を入れる */}
                        <p className={introStyles.myDescription}>
                            Hi, I am a Frontend Developer. In 4 years of experience as web developer in Japan and
                            Philippines, I have developed
                            many web applications with React.js and Next.js. Also have some experiences with Backend and
                            Mobile development.
                        </p>
                        <div className={introStyles.myButtons}>
                            <div className={introStyles.myInfoButtons}>
                                <button
                                    className={`${indexStyles.button} ${introStyles.buttonPortfolio}`}
                                    onClick={handleScrollToPortfolios}
                                >
                                    Portfolio
                                </button>
                                <button
                                    className={`${indexStyles.button} ${introStyles.buttonContact}`}
                                    onClick={handleScrollToContact}
                                >
                                    Contact
                                </button>

                                <a
                                    href="/pdf/Soma_Ikeda_Resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${indexStyles.button} ${introStyles.buttonResume}`}
                                >
                                    Resume
                                </a>
                            </div>

                            <div className={introStyles.snsIcons}>
                                <a href="https://www.linkedin.com/in/soma-ikeda-99b9741b6" target="_blank" rel="noreferrer">
                                    <Image
                                        src="/assets/linkedin.png"
                                        alt="linkedin icon"
                                        width={25}
                                        height={25}
                                    />
                                </a>

                                <a href="https://github.com/Soma-dev0808" target="_blank" rel="noreferrer">
                                    <Image
                                        src="/assets/github.png"
                                        alt="github icon"
                                        width={25}
                                        height={25}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
