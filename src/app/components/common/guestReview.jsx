import React from "react";
import PropTypes from "prop-types";

const GuestReview = ({ path, text, name, surname, date }) => {
    const getReviewClass = (path) => {
        const initClass = "review-block";
        if (path === "") {
            return `food__review  ${initClass}`;
        } else if (path === "about") {
            return `reviews__item  ${initClass}`;
        } else if (path === "rooms") {
            return `room-reviews__item  ${initClass}`;
        }
    };

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
    path: PropTypes.string,
    text: PropTypes.string,
    name: PropTypes.string,
    surname: PropTypes.string,
    date: PropTypes.string
};

export default GuestReview;
