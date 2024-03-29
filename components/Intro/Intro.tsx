import React, { useEffect, useRef } from "react";
import Navbar from "../Navbar";
import useScroll from "../utils/useScroll";
import { scrollToTargetId } from "../utils/utils";

import indexStyles from "../../styles/index.module.css";
import introStyles from "../../styles/intro.module.css";

const Intro = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isFullyVisible] = useScroll(sectionRef);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.7;
  }, []);

  const handleScrollToAboutMe = () => scrollToTargetId("#aboutMe");
  const handleScrollToPortfolios = () => scrollToTargetId("#portfolios");

  return (
    <section
      ref={sectionRef}
      id="intro"
      className={`${indexStyles.sections} ${introStyles.introSection}`}
    >
      <div className={`${introStyles.lpTitle} ${introStyles.introWrapper}`}>
        <div className={`${indexStyles.fadeUp} ${indexStyles.displaDelay100}`}>
          <p>Hi, my name is</p>
        </div>
        <div className={`${indexStyles.fadeUp} ${indexStyles.displaDelay200}`}>
          <h2 className={introStyles.heading}>Soma Ikeda.</h2>
        </div>
        <div className={`${indexStyles.fadeUp} ${indexStyles.displaDelay300}`}>
          <h3 className={`${introStyles.heading} ${introStyles.positionTitle}`}>
            Frontend Developer.
          </h3>
        </div>
        <div className={`${indexStyles.fadeUp} ${indexStyles.displaDelay400}`}>
          <p className={introStyles.introMySelf}>
            I am a Frontend Developer. I am specialized in frontend development
            using React.js, Next.js, Typescript, and Redux. I also have some
            experience in backend development using Node.js and mobile
            development using Native Script.
          </p>
        </div>
        <div className={`${indexStyles.fadeUp} ${indexStyles.displaDelay500}`}>
          <button
            className={`${indexStyles.button} ${introStyles.introButton} ${introStyles.checkMeButton}`}
            onClick={handleScrollToAboutMe}
          >
            About Me
          </button>
          <button
            className={`${indexStyles.button} ${introStyles.introButton}`}
            onClick={handleScrollToPortfolios}
          >
            Portfolio
          </button>
        </div>
      </div>

      <div className={introStyles.videoArea}>
        <video
          ref={videoRef}
          className={introStyles.video}
          poster="./assets/tree_alt.png"
          playsInline
          muted
          autoPlay
          loop
        >
          <source src="./assets/tree.mp4" type="video/mp4" />
          <source src="./assets/tree.ogv" type="video/ogv" />
          <source src="./assets/tree.webm" type="video/webm" />
          <p>Error with dispalying a video.</p>
        </video>
      </div>
      {/* Navbar */}
      {<Navbar shouldDisplay={!isFullyVisible} isIndexPage />}
    </section>
  );
};

export default Intro;
