import React, { useState } from "react";
import _ from "lodash";
import RoomItem from "./roomItem";
import Loader from "../../common/loader";
import Pagination from "../../common/pagination";
import { paginate } from "../../../utils/paginate";
import SelectionRooms from "./selectionRooms";
import useRooms from "../../../hooks/useRooms";

const AvailableRooms = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedClass, setSelectedClass] = useState();
    const [sortBy, setSortBy] = useState({ iter: "", order: "" });
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

    const handleSortPrice = (method) => {
        if (!method) return;

        return method === "increase"
            ? setSortBy({ iter: "price", order: "asc" })
            : setSortBy({ iter: "price", order: "desc" });
    };

    if (rooms.length === 0) return <Loader />;

    const filteredRooms =
        selectedClass && selectedClass !== "allways"
            ? rooms.filter((room) => room.class === selectedClass)
            : rooms;
    const count = filteredRooms.length;

    const sortedRooms = _.orderBy(filteredRooms, [sortBy.iter], [sortBy.order]);
    const roomCrop = paginate(sortedRooms, currentPage, pageSize);

    return (
        <div className="available-rooms">
            <div className="_container">
                <SelectionRooms
                    onSelectedClass={handleSelectedClass}
                    onSortPrice={handleSortPrice}
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
