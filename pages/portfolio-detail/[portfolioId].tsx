import Image from "next/image";
import Link from 'next/link';
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AppLyout from "../../components/AppLayout";
import { PortfolioProps } from "../../components/Portfolios/Portfolio";
import portfolioData from '../../components/utils/portfolioData';
import { replaceWithBr } from "../../components/utils/utils";

import indexStyles from "../../styles/index.module.css";
import portfolioDetailStyles from "../../styles/portfolioDetail.module.css";
import Navbar from "../../components/Navbar";

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
        portfolioGifPath,
        impDescription,
        difficultPart,
        duration,
        other,
        prevPortfolio,
        nextPortfolio,
    } = portfolio;

    return (
        <AppLyout tabTitle={'Soma Ikeda - ' + (portfolioTitle)}>
            <Navbar shouldDisplay isIndexPage={false} />
            <section className={indexStyles.sections}>
                <div className={portfolioDetailStyles.wrapper}>
                    <div className={`${portfolioDetailStyles.imageSection} ${indexStyles.fadeUp} ${indexStyles.displaDelay100}`}>
                        <div className={portfolioDetailStyles.imageContainer}>
                            <Image
                                className={portfolioDetailStyles.portfolioImage}
                                src={portfolioImgPath}
                                alt={(portfolioId as string) || 'portfolio img'}
                                width={700}
                                height={400}
                                unoptimized={true}
                            />
                        </div>
                    </div>

                    {/* Portfolio Detail */}
                    <div className={portfolioDetailStyles.descriptionSection}>
                        <div className={`${portfolioDetailStyles.descBox} ${indexStyles.fadeUp} ${indexStyles.displaDelay200}`}>
                            <h2 className={portfolioDetailStyles.sectionTitle}>
                                {portfolioTitle}
                            </h2>
                            <p
                                className={portfolioDetailStyles.portfolioDesc}
                                dangerouslySetInnerHTML={{ __html: replaceWithBr(portfolioDesc) }}
                            />

                            <div className={portfolioDetailStyles.skillUsedContainer}>
                                {skillUsed.map(
                                    (skill) =>
                                        <div
                                            key={skill}
                                            className={portfolioDetailStyles.skillUsed}
                                        >
                                            {skill}
                                        </div>
                                )}
                            </div>
                        </div>

                        <div className={`${portfolioDetailStyles.descBox} ${indexStyles.fadeUp} ${indexStyles.displaDelay300}`}>
                            <h3 className={portfolioDetailStyles.sectionSubTitle}>
                                Duration
                            </h3>
                            <ul className={portfolioDetailStyles.ulListItems}>
                                <li>
                                    {duration}
                                </li>
                            </ul>
                        </div>

                        <div className={`${portfolioDetailStyles.descBox} ${indexStyles.fadeUp} ${indexStyles.displaDelay400}`}>
                            <h3 className={portfolioDetailStyles.sectionSubTitle}>
                                How I implemented it
                            </h3>

                            <ul className={portfolioDetailStyles.ulListItems}>
                                {impDescription.map((descItem, idx) => (
                                    <li
                                        key={idx}
                                    >
                                        {descItem}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={`${portfolioDetailStyles.gifImgContainer} ${portfolioDetailStyles.descBox}`}>
                            <Image
                                className={portfolioDetailStyles.portfolioGif}
                                src={portfolioGifPath}
                                alt="chat app"
                                width={700}
                                height={600}
                            />
                        </div>

                        <div className={portfolioDetailStyles.descBox}>
                            <h3 className={portfolioDetailStyles.sectionSubTitle}>
                                Difficult Part
                            </h3>

                            <p
                                className={portfolioDetailStyles.portfolioDesc}
                                dangerouslySetInnerHTML={{ __html: replaceWithBr(difficultPart) }}
                            />
                        </div>


                        {other && (
                            <div className={portfolioDetailStyles.descBox}>
                                <h3 className={portfolioDetailStyles.sectionSubTitle}>
                                    Other
                                </h3>

                                <p
                                    className={portfolioDetailStyles.portfolioDesc}
                                    dangerouslySetInnerHTML={{ __html: replaceWithBr(other) }}
                                />
                            </div>
                        )}


                        <div className={portfolioDetailStyles.descBox}>
                            <h3 className={portfolioDetailStyles.sectionSubTitle}>Links</h3>
                            <ul className={`${portfolioDetailStyles.ulListItems} ${portfolioDetailStyles.linkItems}`}>
                                <li>
                                    <a
                                        href={portfolioLiveAppLink}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Live Demo
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href={portfolioGitLink}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className={`${portfolioDetailStyles.descBox} ${portfolioDetailStyles.nextPortfolio}`}>
                            <Link
                                href={`/portfolio-detail/${encodeURIComponent(prevPortfolio.pid)}`}
                            >
                                {'← ' + prevPortfolio.pname}
                            </Link>

                            <Link
                                href={`/`}
                            >
                                Home
                            </Link>

                            <Link
                                href={`/portfolio-detail/${encodeURIComponent(nextPortfolio.pid)}`}
                            >
                                {nextPortfolio.pname + ' →'}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </AppLyout>
    );
};

export default PortfolioDetail;
