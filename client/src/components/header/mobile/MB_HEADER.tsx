import React, { useState, useEffect } from "react";
import { MenuIcon } from "@heroicons/react/solid";

// Components
import Navigation from "../Navigation";
import MB_RIGHT from "./MB_RIGHT";

const MB_HEADER = () => {
    const [displayNav, setDisplayNav] = useState<boolean>(false);

    useEffect(() => {
        const hiddeNav = (e: any) => {
            if (!e.target.classList.contains("i__bars") && displayNav) {
                setDisplayNav(false);
            }
        };

        window.addEventListener("click", hiddeNav);

        return () => window.removeEventListener("click", hiddeNav);
    }, [displayNav]);

    return (
        <header className="MB-header">
            <div className="main">
                <h2>MyBike</h2>
                <MenuIcon
                    className="i__bars"
                    style={{ width: "35px", height: "35px" }}
                    onClick={() => {
                        if (!displayNav) {
                            setDisplayNav(true);
                            return;
                        }

                        setDisplayNav(false);
                    }}
                />
            </div>
            <div
                className="under"
                style={{ display: displayNav ? "block" : "none" }}
            >
                <MB_RIGHT />

                <Navigation />
            </div>
        </header>
    );
};

export default MB_HEADER;
