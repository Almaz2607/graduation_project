import httpService from "./http.service";

const customerEndpoint = "customer/";

const customerService = {
    get: async () => {
        const { data } = await httpService.get(customerEndpoint);
        return data;
    }
};

export default customerService;
