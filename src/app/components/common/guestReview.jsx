import React from "react";
import PropTypes from "prop-types";
import { getReviewClass } from "../../utils/reviews";
import { displayDate } from "../../utils/displayDate";

const GuestReview = ({ path, review }) => {
    const { content, name, surname, created_at: created } = review;

    return (
        <div className={getReviewClass(path)}>
            <p className="review-block__text">{content}</p>
            <div className="review-block__signature">
                <div className="review-block__photo">
                    {/* <img src="" alt="photo" /> */}
                </div>
                <div className="review-block__info">
                    <div className="review-block__name">
                        {name} {surname}
                    </div>
                    <div className="review-block__date">
                        {displayDate(created)}
                    </div>
                </div>
            </div>
        </div>
    );
};

GuestReview.propTypes = {
    path: PropTypes.string.isRequired,
    review: PropTypes.object.isRequired
};

export default GuestReview;
