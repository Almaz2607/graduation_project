import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import api from "../api";

const useReviews = () => {
    const [reviews, setReviews] = useState([]);
    const location = useLocation();
    const pathName = location.pathname.slice(1);

    useEffect(() => {
        api.reviews.fetchAll().then((data) => setReviews(data));
    }, []);
    return { reviews, pathName };
};

export default useReviews;
