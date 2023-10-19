import React, { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import _ from "lodash";
import RoomItem from "./roomItem";
import Pagination from "../../common/pagination";
import { paginate } from "../../../utils/paginate";
import FilterSortBlock from "./filterSortBlock";

const RoomsList = ({ rooms }) => {
    const history = useHistory();
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedClass, setSelectedClass] = useState();
    const [sortBy, setSortBy] = useState({ iter: "", order: "" });

    const pageSize = 4;

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleSelectedClass = (roomClass) => {
        setSelectedClass(roomClass);
    };

    const handleRoomIdSelect = (id) => {
        history.push(`/selection/${id} `);
    };

    const handleSortPrice = (method) => {
        if (!method) return;

        return method === "increase"
            ? setSortBy({ iter: "price", order: "asc" })
            : setSortBy({ iter: "price", order: "desc" });
    };

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
                <FilterSortBlock
                    onSelectedClass={handleSelectedClass}
                    onSortPrice={handleSortPrice}
                />
                {roomCrop.map((room) => (
                    <RoomItem
                        key={room._id}
                        id={room._id}
                        roomClass={room.blockTitle}
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

RoomsList.propTypes = {
    rooms: PropTypes.array
};

export default RoomsList;
