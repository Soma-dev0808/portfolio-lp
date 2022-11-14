import React, { useEffect, useState } from 'react';

const useScroll = (
    ref: React.RefObject<HTMLDivElement>,
    elPositionPercent = -1, // By setting percent for this(eg. 30, 20), you can get notified if element passed the given percent position of border.
) => {
    const [isFullyVisible, setIsFullyVisible] = useState<boolean>(false);
    const [isPartiallyVisible, setIsPartiallyVisible] = useState<boolean>(false);
    const [isElDesiredPosition, setIsElDesiredPosition] = useState<boolean>(false);


    useEffect(() => {
        const toggleTxtClr = () => {
            if (!ref.current) return;

            const position = ref.current?.getBoundingClientRect();


            const isFullyVisibleFlg =
                position.top >= 0 && position.bottom <= window.innerHeight;

            // const isPartiallyVisibleFlg =
            //   position.top < window.innerHeight && position.bottom >= 0;

            // Only scrolled from top to bottom
            const isPartiallyVisibleFlg =
                position.top < window.innerHeight;

            if (elPositionPercent !== -1) {
                const isElDesiredPositionFlg = (window.innerHeight * (elPositionPercent / 100)) > position.y;
                setIsElDesiredPosition(isElDesiredPositionFlg);
            }

            setIsFullyVisible(isFullyVisibleFlg);
            setIsPartiallyVisible(isPartiallyVisibleFlg);
        };
        window.addEventListener("scroll", toggleTxtClr);

        return () => window.removeEventListener("scroll", toggleTxtClr);
    }, [ref, elPositionPercent]);

    return [isFullyVisible, isPartiallyVisible, isElDesiredPosition];
};

export default useScroll;
