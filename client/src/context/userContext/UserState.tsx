import React, { useState, useEffect } from "react";
import UserContext from "./UserContext";
import Axios from "../../config/Axios";
import getCookie from "../../libs/getCookie";

const UserState = ({ children }: any) => {
    const [userDatas, setUserDatas] = useState<any>({
        token: {
            _id: "0",
            username: "",
        },
        auth: false,
    });

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const effectFunc = async () => {
            try {
                const getUserToken = getCookie("token", document.cookie);

                if (!getUserToken || getUserToken === "0")
                    return setLoading(false);

                const { data } = await Axios.get("/auth", {
                    headers: { Authorization: `Bearer ${getUserToken}` },
                });

                setUserDatas(data);
                setLoading(false);
            } catch (e) {
                console.log(e);
                console.log("effectFunc() error");
                setLoading(false);
            }
        };

        effectFunc();
    }, []);

    if (loading) {
        return (
            <>
                <h1>Loading...</h1>
            </>
        );
    }

    return (
        <UserContext.Provider
            value={{
                userDatas,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserState;
