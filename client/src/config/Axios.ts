import Axios from "axios";

//const backEnd_API = "http://localhost:4000";
const backEnd_API = "https://cristobal-mybike-backend.vercel.app";

export default Axios.create({
    baseURL: backEnd_API,
});
