import React from "react";
import Axios from "../../config/Axios";

const SignIn = () => {
    const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const username = formData.get("username").toString();
        const password = formData.get("password").toString();

        if (!username) return console.log("Username missing");
        else if (!password) return console.log("Password missing");

        try {
            const { data } = await Axios.post(
                "/auth/login",
                {
                    username,
                    password,
                },
                { headers: { "Content-Type": "application/json" } }
            );

            if (data.message !== "Logged") return console.log(data);

            document.cookie = `token=${data.token};path=/`;
            window.location.href = "/";
        } catch (e) {
            console.log(e);
            console.log("handleForm() Login error");
        }
    };

    return (
        <form className="iw_form" onSubmit={handleForm}>
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

            <button type="submit">Log In</button>
        </form>
    );
};

export default SignIn;
