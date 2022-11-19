import Image from "next/image";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AppLyout from "../../components/AppLayout";
import { PortfolioProps } from "../../components/Portfolios/Portfolio";
import portfolioData from '../../components/utils/portfolioData';

import indexStyles from "../../styles/index.module.css";
import portfolioDetailStyles from "../../styles/portfolioDetail.module.css";

// Show portfolio detail
const PortfolioDetail: NextPage = () => {
    const [portfolio, setPortfolio] = useState<PortfolioProps>();
    const router = useRouter();
    const { portfolioId } = router.query;



    useEffect(() => {
        if (portfolioId) {
            const portfolioById = portfolioData.portfolioSets.filter(
                p => p.portfolioId === portfolioId
            );

            setPortfolio(portfolioById[0]);
        }
    }, [portfolioId]);

    // Show loading
    if (!portfolio) return null;

    const {
        portfolioTitle,
        portfolioImgPath,
        portfolioDesc,
        skillUsed,
        portfolioLiveAppLink,
        portfolioGitLink,
        portfolioGifPath
    } = portfolio;

    return (
        <AppLyout tabTitle={'Soma Ikeda - ' + (portfolioTitle)}>
            <section className={indexStyles.sections}>
                <div className={portfolioDetailStyles.wrapper}>
                    <div className={portfolioDetailStyles.imageSection}>
                        <div>
                            <Image
                                className={portfolioDetailStyles.portfolioImage}
                                src={portfolioImgPath}
                                alt={(portfolioId as string) || 'portfolio'}
                                width={700}
                                height={400}
                                unoptimized={true}
                                objectFit={'fill'}
                            />
                        </div>
                    </div>

                    {/* Portfolio Detail */}
                    <div className={portfolioDetailStyles.descriptionSection}>
                        <h2 className={indexStyles.sectionTitle}>{portfolioTitle}</h2>

                        <p>
                            {portfolioDesc}
                        </p>

                        <div>
                            {skillUsed.map((skill) => <div key={skill}>{skill}</div>)}
                        </div>

                        <div>
                            <Image
                                src={portfolioGifPath}
                                alt="chat app"
                                width={700}
                                height={500}
                            />
                        </div>

                        <div>
                            <h3>Links</h3>
                            <a
                                href={portfolioLiveAppLink}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Live Demo
                            </a>

                            <a
                                href={portfolioGitLink}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Github
                            </a>
                        </div>

                    </div>
                </div>
            </section>

        </AppLyout>
    );
};

export default PortfolioDetail;
