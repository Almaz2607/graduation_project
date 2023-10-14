import React from "react";
import PropTypes from "prop-types";
import { getReviewClass } from "../../utils/reviews";

const GuestReview = ({ path, text, name, surname, date }) => {
    return (
        <div className={getReviewClass(path)}>
            <p className="review-block__text">{text}</p>
            <div className="review-block__signature">
                <div className="review-block__photo">
                    {/* <img src="" alt="photo" /> */}
                </div>
                <div className="review-block__info">
                    <div className="review-block__name">
                        {name} {surname}
                    </div>
                    <div className="review-block__date">{date}</div>
                </div>
            </div>
        </div>
    );
};

GuestReview.propTypes = {
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
};

export default GuestReview;
