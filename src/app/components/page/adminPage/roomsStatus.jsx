import React from "react";
import { Link } from "react-router-dom";

const RoomsStatus = () => {
    return (
        <>
            <div className="status__content-title content-title">
                <div className="content-title__text">Статус номеров</div>
            </div>
            <div className="status__content-links">
                <div className="status__content-link link-block">
                    <Link to="admin/free" className="link-block___value">
                        Доступные номера
                    </Link>
                </div>
                <div className="status__content-link link-block">
                    <Link to="admin/reserved" className="link-block___value">
                        Зарезервированные номера
                    </Link>
                </div>
            </div>
        </>
    );
};

export default RoomsStatus;
