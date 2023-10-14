import React from "react";
import { useParams } from "react-router-dom";
import useRooms from "../../hooks/useRooms";
import useReviews from "../../hooks/useReviews";
import RoomSelection from "./roomSelectionPage";
import RoomDetails from "./roomDetailsPage";
import Loader from "../common/loader";

const AvailableRooms = () => {
    const { rooms } = useRooms();
    const { reviews, pathName } = useReviews();

    const params = useParams();
    const { roomId } = params;

    const path = pathName.slice(0, 9);
    const isLoading = rooms.length === 0 || reviews.length === 0;

    if (isLoading) return <Loader />;

    return (
        <>
            {roomId ? (
                <RoomDetails
                    roomId={roomId}
                    rooms={rooms}
                    reviews={reviews}
                    path={path}
                />
            ) : (
                <RoomSelection rooms={rooms} />
            )}
        </>
    );
};

export default AvailableRooms;
