import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import roomService from "../services/room.service";
import { toast } from "react-toastify";
import Loader from "../components/common/loader";

const RoomContext = React.createContext();

export const useRoom = () => {
    return useContext(RoomContext);
};

const RoomProvider = ({ children }) => {
    const [rooms, setRooms] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getRooms();
    }, []);

    useEffect(() => {
        if (error !== null) {
            toast(error);
            setError(null);
        }
    }, [error]);

    const getRooms = async () => {
        try {
            const { content } = await roomService.get();
            setRooms(content);
            setLoading(false);
        } catch (error) {
            errorCatcher(error);
        }
    };

    function errorCatcher(error) {
        const message = error.response.data;
        setError(message);
        setLoading(false);
    }

    return (
        <RoomContext.Provider value={{ rooms }}>
            {!isLoading ? children : <Loader />}
        </RoomContext.Provider>
    );
};

RoomProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default RoomProvider;
