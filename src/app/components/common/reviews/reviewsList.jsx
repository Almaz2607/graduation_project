import React from "react";
import PropTypes from "prop-types";
import Review from "./review";

const ReviewsList = ({ reviews, onRemove }) => {
    return reviews.map((review) => (
        <Review key={review._id} {...review} onRemove={onRemove} />
    ));
};

ReviewsList.propTypes = {
    reviews: PropTypes.array,
    onRemove: PropTypes.func
};

export default ReviewsList;
