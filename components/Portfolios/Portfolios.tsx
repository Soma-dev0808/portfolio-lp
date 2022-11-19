import React from "react";
import indexStyles from "../../styles/index.module.css";
import portfolioStyles from "../../styles/portfolio.module.css";
import Portfolio from "./Portfolio";
import SectionLayout from "../SectionLayout";

import portfolioData from '../utils/portfolioData';

// Portfolio senction
const Portfolios = () => {

  const { portfolioSets } = portfolioData;

  return (
    <SectionLayout sectionId="portfolios">
      <h2 className={indexStyles.sectionTitle}>Portfolio</h2>
      <div className={portfolioStyles.portfolios}>
        {portfolioSets.map((p) => (
          <Portfolio
            key={p.portfolioId}
            portfolioTitle={p.portfolioTitle}
            portfolioDesc={p.portfolioDesc}
            portfolioId={p.portfolioId}
            portfolioGitLink={p.portfolioGitLink}
            portfolioGifPath={p.portfolioGifPath}
            skillUsed={p.skillUsed}
            isPosReverse={p.isPosReverse}
          />
        ))}
      </div>
    </SectionLayout>
  );
};

export default Portfolios;
