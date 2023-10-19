import { useState, useEffect } from "react";
import api from "../api";

const useConditions = () => {
    const [conditions, setConditions] = useState([]);

    useEffect(() => {
        api.conditions.fetchAll().then((data) => setConditions(data));
    }, []);
    return { conditions };
};

export default useConditions;
