import React, { useState } from "react";
import RoomItem from "./roomItem";
import Loader from "../../common/loader";
import Pagination from "../../common/pagination";
import { paginate } from "../../../utils/paginate";
import SelectionRooms from "./selectionRooms";
import useRooms from "../../../hooks/useRooms";

const AvailableRooms = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedClass, setSelectedClass] = useState();
    const [selectedPrice, setSelectedPrice] = useState();
    const { rooms } = useRooms();
    const pageSize = 4;

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleRoomIdSelect = (id) => {
        console.log(id);
    };

    const handleSelectedClass = (roomClass) => {
        setSelectedClass(roomClass);
    };

    const handleSelectedPrice = (roomPrice) => {
        setSelectedPrice(roomPrice);
    };
    console.log(selectedPrice);

    if (rooms.length === 0) return <Loader />;

    const filteredRooms =
        selectedClass && selectedClass !== "allways"
            ? rooms.filter((room) => room.class === selectedClass)
            : rooms;
    const count = filteredRooms.length;
    const roomCrop = paginate(filteredRooms, currentPage, pageSize);

    return (
        <div className="available-rooms">
            <div className="_container">
                <SelectionRooms
                    onSelectedClass={handleSelectedClass}
                    onSelectedPrice={handleSelectedPrice}
                />
                {roomCrop.map((room) => (
                    <RoomItem
                        key={room._id}
                        id={room._id}
                        roomClass={room.roomClass}
                        numberOfGuests={room.numberOfGuests}
                        price={room.price}
                        onSelectedItem={handleRoomIdSelect}
                    />
                ))}
                <Pagination
                    itemsCount={count}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default AvailableRooms;
