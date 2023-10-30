import React from "react";
import PropTypes from "prop-types";

const CardItem = ({ room }) => {
    return (
        <div className="card">
            <div className="card__body">
                <div className="card__column">
                    <div className="card__column-number">{room.number}</div>
                    <div className="card__column-class">
                        {room.class} {room.numberOfGuests}
                    </div>
                    <button className="card__column-button">Подробно</button>
                </div>
            </div>
        </div>
    );
};

CardItem.propTypes = {
    room: PropTypes.object
};

export default CardItem;
