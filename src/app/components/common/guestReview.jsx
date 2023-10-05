import React from "react";
import PropTypes from "prop-types";

const GuestReview = ({ text, name, surname, date }) => {
    return (
        <div className="reviews__item review-block">
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
    text: PropTypes.string,
    name: PropTypes.string,
    surname: PropTypes.string,
    date: PropTypes.string
};

export default GuestReview;
