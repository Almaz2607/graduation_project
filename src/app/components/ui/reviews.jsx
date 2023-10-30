import React from "react";
import { useReview } from "../../hooks/useReviews";
import { orderBy } from "lodash";
import ReviewsList, { AddReviewForm } from "../common/reviews";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Reviews = () => {
    const history = useHistory();
    const { reviews, createReview, removeReview } = useReview();
    const { currentCustomer } = useAuth();

    const handleSubmit = async (data) => {
        await createReview(data);
        history.push("/about");
    };

    const handleRemoveReview = (id) => {
        removeReview(id);
    };

    const customerReviews = reviews.filter(
        (review) => review.customer_id === currentCustomer._id
    );
    const sortedReviews = orderBy(customerReviews, ["created_at"], ["desc"]);

    return (
        <>
            <div className="card border border-3 rounded-3 mb-2">
                <AddReviewForm onSubmit={handleSubmit} />
            </div>
            {sortedReviews.length > 0 && (
                <div className="card border border-3 rounded-3 mb-3">
                    <div className="card-body w-100">
                        <h2>Отзывы</h2>
                        <hr />
                        <ReviewsList
                            reviews={sortedReviews}
                            onRemove={handleRemoveReview}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default Reviews;
