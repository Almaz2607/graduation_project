import httpService from "./http.service";

const reviewEndpoint = "review/";

const reviewService = {
    get: async () => {
        const { data } = await httpService.get(reviewEndpoint);
        return data;
    }
};

export default reviewService;
