import { Strategy, StrategyOptions, ExtractJwt } from "passport-jwt";
import Account from "../models/Account";
import config from "../config/config";

const opts: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.JWT_SECRET,
};

export default new Strategy(opts, async (payload, done) => {
    try {
        const user = await Account.findOne({ _id: payload.id });

        if (!user) return done(null, false);

        return done(null, user);
    } catch (e) {
        console.log(e);
        console.log("passport_jwt() error");
        done(e, false);
    }
});
