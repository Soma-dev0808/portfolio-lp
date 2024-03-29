import React, { useRef } from "react";
import Image from "next/image";
import indexStyles from "../../styles/index.module.css";
import aboutMeStyles from "../../styles/aboutMe.module.css";
import { scrollToTargetId } from "../utils/utils";
import SectionLayout from "../SectionLayout";
import useScroll from "../utils/useScroll";

// Introduction section
const AboutMe = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isFullyVisible] = useScroll(ref);

  const handleScrollToContact = () => scrollToTargetId("#contact");

  const descCls = isFullyVisible && aboutMeStyles.myDescriptionFullyVisible;

  return (
    <SectionLayout sectionId="aboutMe">
      <div ref={ref} className={aboutMeStyles.introContainer}>
        {/* Left side */}
        <div className={aboutMeStyles.introLeftSide}>
          <div>
            <h2 className={indexStyles.sectionTitle}>About Me</h2>
          </div>

          {/* ここに自分の自己紹介を入れる */}
          <p className={`${aboutMeStyles.myDescription} ${descCls}`}>
            Hi, I am Soma Ikeda. With 4 years of experience as a web developer in
            Japan and the Philippines, I have developed many applications for web
            and mobile. I am passionate about creating SPA(Single Page Application) with React.js and
            Redux. I also have some experience with Backend and Mobile
            development.
          </p>
          {/* <p className={`${aboutMeStyles.myDescription} ${descCls}`}>
            Previously I have developed Saas application which has over 500k users,
            CRM application for sales person in medical industry, and a notification system for accounting information using React.js and Next.js.
          </p> */}

          <div className={aboutMeStyles.myButtons}>
            <div className={aboutMeStyles.myInfoButtons}>
              <button
                className={`${indexStyles.button} ${aboutMeStyles.buttonContact}`}
                onClick={handleScrollToContact}
              >
                Contact
              </button>

              <a
                href="/pdf/Soma_Ikeda_Resume_.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`${indexStyles.button} ${aboutMeStyles.buttonResume}`}
              >
                Resume
              </a>
            </div>

            <div className={aboutMeStyles.snsIcons}>
              <a
                href="https://www.linkedin.com/in/soma-ikeda-99b9741b6"
                target="_blank"
                rel="noreferrer"
                className={aboutMeStyles.snsIcon}
              >
                <Image
                  src="/assets/linkedin.png"
                  alt="linkedin icon"
                  width={25}
                  height={25}
                />
              </a>

              <a
                href="https://github.com/Soma-dev0808"
                target="_blank"
                rel="noreferrer"
              >
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

        {/* Right side */}
        <div className={aboutMeStyles.introRightSide}>
          <div className={aboutMeStyles.profileImgContainer}>
            <div className={aboutMeStyles.plofileImg}></div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default AboutMe;
