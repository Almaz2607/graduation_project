import httpService from "./http.service";
import localStorageService from "./localStorage.service";

const customerEndpoint = "customer/";

const customerService = {
    get: async () => {
        const { data } = await httpService.get(customerEndpoint);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.put(
            customerEndpoint + payload._id,
            payload
        );
        return data;
    },
    getCurrentCustomer: async () => {
        const { data } = await httpService.get(
            customerEndpoint + localStorageService.getCustomerId()
        );
        return data;
    }
};

export default customerService;
