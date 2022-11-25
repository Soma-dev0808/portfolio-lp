import React from "react";
import Image from "next/image";
import Link from 'next/link';
import { replaceWithBr } from "../utils/utils";

import indexStyles from "../../styles/index.module.css";
import portfolioStyles from "../../styles/portfolio.module.css";

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
  return (
    <div
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

        <div
          className={`${portfolioStyles.skillUsedContainer} ${isPosReverse && portfolioStyles.skillUsedContainerReverse}`}
        >
          {skillUsed.map((skill) => (
            <span
              key={skill}
              className={portfolioStyles.skillUsed}
            >
              {skill}
            </span>
          ))}
        </div>

        <p
          className={portfolioStyles.appDesc}
          dangerouslySetInnerHTML={{ __html: replaceWithBr(portfolioDesc) }}
        ></p>

        <div className={`${portfolioStyles.linksContainer} ${isPosReverse && portfolioStyles.linksContainerReverse}`}>
          <Link
            href={`/portfolio-detail/${encodeURIComponent(portfolioId)}`}
          >
            <a className={indexStyles.button}>
              See More
            </a>
          </Link>

        </div>
      </div>
      <div
        className={`${portfolioStyles.portfolioGifContainer} ${isPosReverse && portfolioStyles.portfolioGifContainerReverse
          }`}
      >
        <div className={`${portfolioStyles.radialBackground}`} />
        <Image
          src={portfolioGifPath}
          className={portfolioStyles.portfolioGif}
          alt="chat app"
          width={700}
          height={500}
        />
      </div>
    </div >
  );
};

export type { PortfolioProps };
export default Portfolio;
