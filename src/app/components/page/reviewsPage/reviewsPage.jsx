import React from "react";
import CustomerCard from "../../ui/customerCard";
import Reviews from "../../ui/reviews";

const ReviewsPage = () => {
    return (
        <div className="_container">
            <div className="row gutters-sm my-4 px-4">
                <div className="col-md-4 mb-3">
                    <CustomerCard />
                </div>
                <div className="col-md-8">
                    <Reviews />
                </div>
            </div>
        </div>
    );
};

export default ReviewsPage;
