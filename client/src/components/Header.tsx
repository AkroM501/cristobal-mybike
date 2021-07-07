import React, { useState, useEffect } from "react";

import DK_HEADER from "./header/desktop/DK_HEADER";
import MB_HEADER from "./header/mobile/MB_HEADER";

const Header = () => {
    const [userWidth, setUserWidth] = useState<number>(0);

    useEffect(() => {
        setUserWidth(window.innerWidth);
        const resizeFunc = () => {
            setUserWidth(window.innerWidth);
        };

        window.addEventListener("resize", resizeFunc);
    }, [userWidth]);

    return userWidth >= 850 ? <DK_HEADER /> : <MB_HEADER />;
};

export default Header;
