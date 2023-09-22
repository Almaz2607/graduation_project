import React from "react";
import PropTypes from "prop-types";
import Room from "./room";
import RoomsList from "./roomsList";
import api from "../../../../api";

function Rooms({ match }) {
    const roomId = match.params.roomId;
    const rooms = api.rooms.fetchAll();

    return <div>{!roomId ? <Room /> : <RoomsList rooms={rooms} />}</div>;
}

Rooms.propTypes = {
    match: PropTypes.object
};

export default Rooms;
