import React from "react";
import PropTypes from "prop-types";
import CardItem from "./cardItem";
import BackHistoryButton from "../../common/backButton";

const ShowRooms = ({ rooms, title }) => {
    return (
        <>
            <div className="show__content-title content-title">
                <div className="content-title__text">{title}</div>
                <div className="show__content-items">
                    {rooms.map((room) => (
                        <CardItem key={room._id} room={room} />
                    ))}
                </div>
                <BackHistoryButton />
            </div>
        </>
    );
};

ShowRooms.propTypes = {
    rooms: PropTypes.array,
    title: PropTypes.string
};

export default ShowRooms;
