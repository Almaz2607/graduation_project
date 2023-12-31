import { useEffect, useState } from "react";
import customers from "../mockData/customers.json";
import reviews from "../mockData/reviews.json";
import rooms from "../mockData/rooms.json";
import httpService from "../services/http.service";

const useMockData = () => {
    const statusConsts = {
        idle: "Not Started",
        pending: "In Process",
        succesed: "Ready",
        error: "Error occured"
    };

    const [error, setError] = useState(null);
    const [status, setStatus] = useState(statusConsts.idle);
    const [progress, setProgress] = useState(0);
    const [count, setCount] = useState(0);

    const summuryCount = customers.length + reviews.length + rooms.length;
    const incrementCount = () => {
        setCount((prevState) => prevState + 1);
    };

    const updateProgress = () => {
        if (count !== 0 && status === statusConsts.idle) {
            setStatus(statusConsts.pending);
        }
        const newProgress = Math.floor((count / summuryCount) * 100);
        if (progress < newProgress) {
            setProgress(() => newProgress);
        }
        if (newProgress === 100) {
            setStatus(statusConsts.succesed);
        }
    };

    useEffect(() => {
        updateProgress();
    }, [count]);

    async function initialize() {
        try {
            for (const cust of customers) {
                await httpService.put("customer/" + cust._id, cust);
                incrementCount();
            }
            for (const rev of reviews) {
                await httpService.put("review/" + rev._id, rev);
                incrementCount();
            }
            for (const room of rooms) {
                await httpService.put("room/" + room._id, room);
                incrementCount();
            }
        } catch (error) {
            setError(error);
            setStatus(statusConsts.error);
        }
    }

    return { error, initialize, progress, status };
};

export default useMockData;
