import React, { useContext } from "react";
import { useRouter } from "next/router";

// Context
import UserContext from "../../../context/userContext/UserContext";

const MB_RIGHT = () => {
    const router = useRouter();
    const { userDatas } = useContext(UserContext);

    return (
        <div className="right">
            {userDatas.auth ? (
                <>
                    <h3>{userDatas.token.username}</h3>
                    <button
                        type="button"
                        onClick={() => {
                            document.cookie = "token=0;";
                            window.location.href = "/auth/sign-in";
                        }}
                    >
                        Logout
                    </button>
                </>
            ) : (
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
            )}
        </div>
    );
};

export default MB_RIGHT;
