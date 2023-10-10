import React from "react";
import PropTypes from "prop-types";

const RoomConditions = ({ text }) => {
    return (
        <div className="rooms__conditions-item ">
            <div className="rooms__conditions-circle review-block__photo" />
            <p className="review-block__text">{text}</p>
        </div>
    );
};

RoomConditions.propTypes = {
    text: PropTypes.string
};

export default RoomConditions;
