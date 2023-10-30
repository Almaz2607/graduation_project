import React from "react";
import { useAuth } from "../../hooks/useAuth";

const CustomerCard = () => {
    const { currentCustomer } = useAuth();

    return (
        <div className="card border border-3 rounded-2 mb-3">
            <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center position-relative">
                    <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg`}
                        alt="photo"
                        className="rounded-circle shadow-1-strong me-3"
                        width="65"
                        height="65"
                    />
                    <div className="mt-3">
                        <h4>
                            {currentCustomer.name} {currentCustomer.surname}
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerCard;
