import React, { useState } from "react";
import { paginate } from "../utils/paginate";
import PropTypes from "prop-types";
import Pagination from "./common/pagination";

function RoomsList({ rooms }) {
    const count = rooms.length;
    const pageSize = 3;
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const roomCrop = paginate(rooms, currentPage, pageSize);

    return (
        <>
            <div>
                {roomCrop.map((room) => (
                    <h5 key={room._id}>{`Number ${room.number}`}</h5>
                ))}
            </div>
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
}

RoomsList.propTypes = {
    rooms: PropTypes.array
};

export default RoomsList;
