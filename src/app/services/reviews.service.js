import httpService from "./http.service";

const reviewEndpoint = "review/";

const reviewService = {
    get: async () => {
        const { data } = await httpService.get(reviewEndpoint);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.put(
            reviewEndpoint + payload._id,
            payload
        );
        return data;
    },
    remove: async (id) => {
        await httpService.delete(reviewEndpoint + id);
    }
};

export default reviewService;
