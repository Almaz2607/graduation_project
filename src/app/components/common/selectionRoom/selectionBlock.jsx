import React, { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "./calendar/calendar";

const SelectionBlock = () => {
    const [showCalendar, setShowCalendar] = useState(false);

    const handlerClick = () => {
        setShowCalendar((prev) => !prev);
    };

    return (
        <div className="selection">
            <div className="selection__container _container">
                <div className="selection__body">
                    <div className="selection__column">
                        <Link to="/calendar" className="selection__button">
                            Дата заезда
                        </Link>
                        <div className="selection__text">03.08</div>
                    </div>
                    <div className="selection__column">
                        <button
                            className="selection__button"
                            onClick={handlerClick}
                        >
                            Дата выезда
                        </button>
                        <div className="selection__text">15.08</div>
                    </div>
                    <div className="selection__column">
                        <button className="selection__button">Номер</button>
                        <div className="selection__text">Люкс</div>
                    </div>
                    <div className="selection__column">
                        <button className="selection__button">Гостей</button>
                        <div className="selection__text">2 Гостей</div>
                    </div>
                    <div className="selection__column-total">
                        <Link to="/available" className="selection__link-total">
                            Подобрать номер
                        </Link>
                    </div>
                </div>
                {showCalendar && <Calendar />}
            </div>
        </div>
    );
};

export default SelectionBlock;
