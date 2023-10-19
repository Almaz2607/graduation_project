import axios from "axios";
import { toast } from "react-toastify";
import config from "../config.json";
// import localStorageService from "./localStorage.service";
// import authService from "./auth.service";

axios.defaults.baseURL = config.apiEndpoint;

axios.interceptors.response.use(
    (res) => res,
    function (error) {
        const expectedErrors =
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500;
        if (!expectedErrors) {
            console.log(error);
            toast.error("Something was wrong. Try it later");
        }
        return Promise.reject(error);
    }
);

const httpService = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    delete: axios.delete
};

export default httpService;

// const http = axios.create({
//     baseURL: configFile.apiEndPoint
// });

// http.interceptors.request.use(
//     async function (config) {
//         if (configFile.isFirebase) {
//             const containSlash = /\/$/gi.test(config.url);
//             config.url =
//                 (containSlash ? config.url.slice(0, -1) : config.url) + ".json";

//             const refreshToken = localStorageService.getRefreshToken();
//             const expiresDate = localStorageService.getTokenExpiresDate();

//             if (refreshToken && expiresDate < Date.now()) {
//                 const data = await authService.refresh();

//                 localStorageService.setTokens({
//                     refreshToken: data.refresh_token,
//                     idToken: data.id_token,
//                     expiresIn: data.expires_id,
//                     localId: data.user_id
//                 });
//             }

//             const accessToken = localStorageService.getAccessToken();
//             if (accessToken) {
//                 config.params = { ...config.params, auth: accessToken };
//             }
//         }
//         return config;
//     },
//     function (error) {
//         return Promise.reject(error);
//     }
// );

// const transformData = (data) => {
//     return data && !data._id
//         ? Object.keys(data).map((key) => ({
//               ...data[key]
//           }))
//         : data;
// };
