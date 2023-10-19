import httpService from "./http.service";

const roomEndpoint = "selection/";

const roomService = {
    get: async () => {
        const { data } = await httpService.get(roomEndpoint);
        return data;
    }
};

export default roomService;
