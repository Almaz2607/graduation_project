import React from "react";
import PropTypes from "prop-types";

const PriceInfoItem = ({ text }) => {
    return (
        <div className="room-price__item">
            <div className="room-price__circle review-block__photo" />
            <p className="review-block__text">{text}</p>
        </div>
    );
};

PriceInfoItem.propTypes = {
    text: PropTypes.string
};

export default PriceInfoItem;
