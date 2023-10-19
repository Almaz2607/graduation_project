import { useState, useEffect } from "react";
import api from "../api";

const useRooms = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        api.rooms.fetchAll().then((data) => setRooms(data));
    }, []);

    return { rooms };
};

export default useRooms;
