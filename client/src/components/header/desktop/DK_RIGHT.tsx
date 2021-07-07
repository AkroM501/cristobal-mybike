import React, { useContext } from "react";
import { useRouter } from "next/router";

// Context
import UserContext from "../../../context/userContext/UserContext";

const DK_RIGHT = () => {
    const { userDatas } = useContext(UserContext);
    const router = useRouter();

    return (
        <div className="right">
            {!userDatas.auth ? (
                <>
                    <button
                        type="button"
                        onClick={() => router.push("/auth/sign-in")}
                    >
                        Sign In
                    </button>
                    <button
                        type="button"
                        onClick={() => router.push("/auth/sign-up")}
                    >
                        Sign Up
                    </button>
                </>
            ) : (
                <>
                    <h3>Hey {userDatas.token.username}</h3>
                    <button
                        type="button"
                        onClick={() => {
                            document.cookie = "token=0";
                            window.location.href = "/auth/sign-in";
                        }}
                    >
                        Logout
                    </button>
                </>
            )}
        </div>
    );
};

export default DK_RIGHT;
