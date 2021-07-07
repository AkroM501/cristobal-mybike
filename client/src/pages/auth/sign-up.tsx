import React from "react";
import Axios from "../../config/Axios";
import { useRouter } from "next/router";

const SignUp = () => {
    const router = useRouter();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const username = formData.get("username").toString();
        const password = formData.get("password").toString();
        const confirm_password = formData.get("confirm_password").toString();

        if (!username) return console.log("Username missing");
        else if (!password) return console.log("Password missing");
        else if (password !== confirm_password)
            return console.log("Password not match");

        try {
            const { data } = await Axios.post(
                "/auth/register",
                {
                    username,
                    password,
                    confirm_password,
                },
                { headers: { "Content-Type": "application/json" } }
            );

            if (data.message !== "Registered") return console.log(data);

            router.push("/auth/sign-in");
        } catch (e) {
            console.log(e);
            console.log("sign-up.tsx");
        }
    };

    return (
        <form className="iw_form" onSubmit={handleSubmit}>
            <div className="formSection">
                <label>Username</label>
                <input type="text" placeholder="Username..." name="username" />
            </div>

            <div className="formSection">
                <label>Password</label>
                <input
                    type="password"
                    placeholder="Password..."
                    name="password"
                />
            </div>

            <div className="formSection">
                <label>Password Confirm</label>
                <input
                    type="password"
                    placeholder="Confirm Password..."
                    name="confirm_password"
                />
            </div>

            <button type="submit">Sign In</button>
        </form>
    );
};

export default SignUp;
