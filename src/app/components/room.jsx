import React from "react";
import PropTypes from "prop-types";

function Room({ rooms, id }) {
    const getRoomById = (id) =>
        rooms.find((room) => room._id.toString() === id);
    const room = getRoomById(id);

    return (
        <div>
            <h3>{room ? room.label : `Room with id:${id} not found`}</h3>
        </div>
    );
}

Room.propTypes = {
    rooms: PropTypes.array,
    id: PropTypes.string
};

export default Room;
