import React, { useRef } from "react";
import Image from "next/image";
import Link from 'next/link';
import portfolioStyles from "../../styles/portfolio.module.css";
import useScroll from "../utils/useScroll";
import { replaceWithBr } from "../utils/utils";

interface PortfolioProps {
  portfolioTitle: string;
  portfolioDesc: string;
  portfolioId: string;
  portfolioLiveAppLink: string;
  portfolioGitLink: string;
  portfolioGifPath: string;
  portfolioImgPath: string;
  skillUsed: string[];
  impDescription: string[];
  difficultPart: string;
  duration: string;
  other: string;
  nextPortfolio: { pname: string; pid: string; };
  prevPortfolio: { pname: string; pid: string; };
  isPosReverse?: boolean;
}

const Portfolio: React.FC<PortfolioProps> = ({
  portfolioTitle,
  portfolioDesc,
  portfolioId,
  portfolioGitLink,
  portfolioGifPath,
  skillUsed,
  isPosReverse = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [isFullyVisible] = useScroll(ref);

  const descClss = isFullyVisible && portfolioStyles.appDescFullyVisible;
  const gifClss = isFullyVisible && portfolioStyles.radialBackgroundFullyVisible;
  const skillUsedClss = isFullyVisible && portfolioStyles.skillUsedFullyVisible;

  return (
    <div
      ref={ref}
      className={`${portfolioStyles.portfolio} ${isPosReverse && portfolioStyles.portfolioReverse
        }`}
    >
      <div
        className={`${portfolioStyles.portfolioDetail} ${isPosReverse && portfolioStyles.portfolioDetailReverse
          }`}
      >
        <a
          className={portfolioStyles.portfolioLink}
          href={portfolioGitLink}
          target="_blank"
          rel="noreferrer"
        >
          <h3
            className={`${portfolioStyles.portfolioTitle} ${isPosReverse && portfolioStyles.portfolioTitleReverse
              }`}
          >
            {portfolioTitle}
            <span className={portfolioStyles.linkIcon}>
              <Image
                src="/assets/link_icon.png"
                alt={`${portfolioId} icon`}
                width={15}
                height={15}
                layout="fixed"
              />
            </span>
          </h3>
        </a>
        <div className={`${portfolioStyles.linksContainer} ${isPosReverse && portfolioStyles.linksContainerReverse}`}>
          <a
            className={portfolioStyles.githubLink}
            href={portfolioGitLink}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/assets/github.png"
              alt="github icon"
              width={20}
              height={20}
            />

            <span className={portfolioStyles.github}>Github</span>
          </a>

          <span className={portfolioStyles.slash}>/</span>

          <Link
            href={`/portfolio-detail/${encodeURIComponent(portfolioId)}`}
          >
            See More
          </Link>
        </div>

        <p
          className={`${portfolioStyles.appDesc} ${descClss}`}
          dangerouslySetInnerHTML={{ __html: replaceWithBr(portfolioDesc) }}
        ></p>
        <div
          className={`${portfolioStyles.skillUsedContainer} ${isPosReverse && portfolioStyles.skillUsedContainerReverse}`}
        >
          {skillUsed.map((skill) => (
            <span
              key={skill}
              className={`${portfolioStyles.skillUsed} ${skillUsedClss}`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div
        className={`${portfolioStyles.portfolioGifContainer} ${isPosReverse && portfolioStyles.portfolioGifContainerReverse
          }`}
      >
        <div className={`${portfolioStyles.radialBackground} ${gifClss}`} />
        <Image
          src={portfolioGifPath}
          className={portfolioStyles.portfolioGif}
          alt="chat app"
          width={700}
          height={500}
        />
      </div>
    </div>
  );
};

export type { PortfolioProps };
export default Portfolio;
