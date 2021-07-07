import { Router } from "express";
import {
    POST_register,
    POST_login,
    GET_verifyUserToken,
} from "../controllers/auth.controllers";
import passport from "passport";

const router = Router();

router.get(
    "/",
    passport.authenticate("jwt", { session: false }),
    GET_verifyUserToken
);
router.post("/register", POST_register);
router.post("/login", POST_login);

export default router;
