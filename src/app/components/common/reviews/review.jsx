import React from "react";
import PropTypes from "prop-types";
import { displayDate } from "../../../utils/displayDate";

const Review = ({
    _id: id,
    name,
    surname,
    content,
    created_at: created,
    onRemove
}) => {
    return (
        <div className="card-body bg-light border border-1 rounded-2  mb-3">
            <div className="row">
                <div className="col">
                    <div className="d-flex flex-start">
                        <img
                            src={`https://api.dicebear.com/7.x/avataaars/svg`}
                            alt="photo"
                            className="rounded-circle shadow-1-strong me-3"
                            width="65"
                            height="65"
                        />
                        <div className="flex-grow-1 flex-shrink-1">
                            <div className="mb-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="mb-1">
                                        {name} {surname}
                                        <span className="small">
                                            -{displayDate(created)}
                                        </span>
                                    </p>
                                    <button
                                        className="btn btn-sm text-primary d-flex align-items-center"
                                        onClick={() => onRemove(id)}
                                    >
                                        <i className="bi bi-x-lg"></i>
                                    </button>
                                </div>
                                <p className="small mb-0">{content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Review.propTypes = {
    _id: PropTypes.string,
    name: PropTypes.string,
    surname: PropTypes.string,
    content: PropTypes.string,
    created_at: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onRemove: PropTypes.func
};

export default Review;
