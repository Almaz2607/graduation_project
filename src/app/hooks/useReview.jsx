import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import reviewService from "../services/reviews.service";
import Loader from "../components/common/loader";

const ReviewContext = React.createContext();

export const useReview = () => useContext(ReviewContext);

const ReviewProvider = ({ children }) => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getReviews();
    }, []);

    useEffect(() => {
        if (error !== null) {
            toast(error);
            setError(null);
        }
    }, [error]);

    const getReviews = async () => {
        try {
            const { content } = await reviewService.get();
            setReviews(content);
            setLoading(false);
        } catch (error) {
            errorCatcher(error);
        }
    };

    function errorCatcher(error) {
        const message = error.response.data;
        setError(message);
        setLoading(false);
    }

    return (
        <ReviewContext.Provider value={{ reviews }}>
            {!isLoading ? children : <Loader />}
        </ReviewContext.Provider>
    );
};

ReviewProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default ReviewProvider;
