import React from "react";
import PropTypes from "prop-types";
import Description from "./description";
import IncludedPrice from "./includedPrice";
import ReviewsBlock from "./reviewsBlock";
import BackHistoryButton from "../../common/backButton";

const RoomDetails = ({ roomId, rooms, reviews, path }) => {
    const id = roomId.slice(0, 24);
    const room = rooms.find((item) => item._id === id);
    const cropReviews = reviews.slice(0, 4);

    return (
        <>
            {room && (
                <div className="room">
                    <div className="_container">
                        <Description room={room} />
                        <IncludedPrice />
                        <ReviewsBlock path={path} reviews={cropReviews} />
                        <BackHistoryButton />
                    </div>
                </div>
            )}
        </>
    );
};

RoomDetails.propTypes = {
    roomId: PropTypes.string.isRequired,
    rooms: PropTypes.array.isRequired,
    reviews: PropTypes.array.isRequired,
    path: PropTypes.string.isRequired
};

export default RoomDetails;
