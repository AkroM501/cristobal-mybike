import mongoose, { ConnectOptions } from "mongoose";
import config from "../config/config";

const connectOpts: ConnectOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose
    .connect(config.DB.MONGODB_URI, connectOpts)
    .then(() => console.log("MongoDB Connected"))
    .catch((e) => console.log(e));
