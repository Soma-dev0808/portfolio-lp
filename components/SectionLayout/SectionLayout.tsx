import React, { useRef } from 'react';

import indexStyles from "../../styles/index.module.css";
import useScroll from '../utils/useScroll';

interface SectionLayoutProps {
    sectionId?: string;
    children: JSX.Element | JSX.Element[];
}

const SectionLayout: React.FC<SectionLayoutProps> = ({ sectionId, children }) => {

    const ref = useRef<HTMLDivElement>(null);
    const [_, isPartiallyVisible] = useScroll(ref);

    const fadeUpCls = isPartiallyVisible && indexStyles.fadeUp;

    return (
        <section id={sectionId} className={indexStyles.sections}>
            <div ref={ref} className={`${indexStyles.wrapper} ${fadeUpCls}`}>
                {children}
            </div>
        </section>
    );
};

export default SectionLayout;