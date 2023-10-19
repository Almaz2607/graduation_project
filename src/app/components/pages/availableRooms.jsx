import React from "react";
import { useParams } from "react-router-dom";
import useRooms from "../../hooks/useRooms";
import useReviews from "../../hooks/useReviews";
import RoomsList from "./roomSelectionPage";
import RoomDetails from "./roomDetailsPage";
import Loader from "../common/loader";
// import RoomProvider from "../../hooks/useRoom";
import { useUser } from "../../hooks/useUsers";

const AvailableRooms = () => {
    // const {rooms} =useRoom()
    const { users } = useUser();
    console.log(users);
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
                <RoomsList rooms={rooms} />
            )}
        </>
    );
};

export default AvailableRooms;
