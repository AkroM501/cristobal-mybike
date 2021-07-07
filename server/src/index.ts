import { app, server } from "./app";
import "./databases/mongoose";

server.listen(app.get("port"), () =>
    console.log(`SV ON PORT ${app.get("port")}`)
);
