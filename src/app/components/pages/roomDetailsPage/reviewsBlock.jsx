import React from "react";
import PropTypes from "prop-types";
import GuestReview from "../../common/guestReview";

const ReviewsBlock = ({ path, reviews }) => {
    return (
        <section className="room-reviews">
            <div className="room-reviews__title title">
                <p className="title__text">Отзывы гостей</p>
            </div>
            <div className="room-reviews__row">
                <div className="room-reviews__items">
                    {reviews.map((review) => (
                        <GuestReview
                            key={review._id}
                            path={path}
                            text={review.text}
                            name={review.name}
                            surname={review.surname}
                            date={review.creationDate}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

ReviewsBlock.propTypes = {
    path: PropTypes.string.isRequired,
    reviews: PropTypes.array.isRequired
};

export default ReviewsBlock;
