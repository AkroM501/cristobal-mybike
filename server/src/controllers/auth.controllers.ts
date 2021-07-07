import { Handler } from "express";
import Account from "../models/Account";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import config from "../config/config";

export const GET_verifyUserToken: Handler = (req, res) => {
    const user: any = req.user;

    res.json({
        token: {
            _id: user._id,
            username: user.username,
        },
        auth: true,
    });
};

export const POST_register: Handler = async (req, res) => {
    const { username, password, confirm_password } = req.body;

    if (!username || !password || !confirm_password)
        return res.json({ message: "Datas missing" });
    else if (password !== confirm_password) {
        res.json({ message: "Password not match" });
        return;
    }

    try {
        const user = await Account.findOne({
            username_lower: username.toLowerCase(),
        });

        if (user) {
            res.json({ message: "Username already registered" });
            return;
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        await new Account({
            username,
            username_lower: username.toLowerCase(),
            password: hash,
        }).save();

        res.json({ message: "Registered" });
    } catch (e) {
        console.log(e);
        console.log("POST_register() error");
        res.json({ message: "Server internal error" });
    }
};

export const POST_login: Handler = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) return res.json({ message: "Datas missing" });

    try {
        const user = await Account.findOne({ username });

        if (!user) {
            res.json({ message: "Username not found" });
            return;
        }

        const compare = await bcrypt.compare(password, user.password);

        if (!compare) {
            res.json({ message: "password wrong" });
            return;
        }

        const token = jwt.sign(
            {
                id: user._id,
            },
            config.JWT_SECRET,
            { expiresIn: 86400 }
        );

        res.json({
            token,
            message: "Logged",
        });
    } catch (e) {
        console.log(e);
        console.log("POST_login() error");
        res.json({ message: "Server internal error" });
    }
};
