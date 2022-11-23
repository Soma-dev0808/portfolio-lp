import React, { useCallback } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { scrollToTargetId } from '../utils/utils';

import navbarStyles from '../../styles/navbar.module.css';

const Navbar: React.FC<{
    shouldDisplay: boolean;
    isIndexPage: boolean;
}> = ({
    shouldDisplay,
    isIndexPage
}) => {
        const handleScrollToIntro = () => scrollToTargetId("#intro");

        const renderLink = useCallback(() => (
            <Link href={'/'}>
                <div className={navbarStyles.homeLink}>
                    <Image
                        src="/assets/homebutton.png"
                        alt="home icon"
                        width={27}
                        height={27}
                    />
                </div>
            </Link>
        ), []);
        const renderButton = useCallback(() => (
            <button
                className={navbarStyles.homeButton}
                onClick={handleScrollToIntro}
            >
                <Image
                    src="/assets/homebutton.png"
                    alt="home icon"
                    width={27}
                    height={27}
                />
            </button>
        ), []);

        const HomeButton = isIndexPage ? renderButton() : renderLink();

        return (
            <div className={`${navbarStyles.navbar} ${shouldDisplay && navbarStyles.fadeUp}`}>
                <ul className={navbarStyles.navbarList}>
                    <li>
                        {HomeButton}
                    </li>
                    {/* LinkedIn */}
                    <li>
                        <a
                            href="https://www.linkedin.com/in/soma-ikeda-99b9741b6"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image
                                src="/assets/linkedin.png"
                                alt="linkedin icon"
                                width={23}
                                height={23}
                            />
                        </a>

                    </li>
                    {/* Github */}
                    <li>
                        <a
                            href="https://github.com/Soma-dev0808"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image
                                src="/assets/github.png"
                                alt="github icon"
                                width={23}
                                height={23}
                            />
                        </a>

                    </li>
                </ul>
            </div>
        );
    };

export default Navbar;