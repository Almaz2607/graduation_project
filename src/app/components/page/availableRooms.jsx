import React from "react";
import { useParams } from "react-router-dom";
import { useRoom } from "../../hooks/useRooms";
import RoomsList from "./roomSelectionPage";
import RoomDetails from "./roomDetailsPage";

const AvailableRooms = () => {
    const { rooms } = useRoom();
    const params = useParams();
    const { roomId } = params;

    const availableRooms = rooms.filter((room) => room.available === true);
    return (
        <>
            {roomId ? (
                <RoomDetails roomId={roomId} rooms={availableRooms} />
            ) : (
                <RoomsList rooms={availableRooms} />
            )}
        </>
    );
};

export default AvailableRooms;
