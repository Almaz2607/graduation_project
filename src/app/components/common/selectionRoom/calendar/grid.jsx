import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import {
    getCurrentDayClass,
    getCurrentMonthClass,
    getHeaderClass,
    getWeekendClass
} from "../../../../utils/calendar";

const Grid = ({ startDay, today }) => {
    const totalDays = 42;
    const day = startDay.clone().subtract(1, "day");
    const daysArray = [...Array(totalDays)].map(() =>
        day.add(1, "day").clone()
    );

    return (
        <>
            <div className="grid__container-header">
                {[...Array(7)].map((_, index) => (
                    <div key={index} className="grid__cell-header-wrapper">
                        <div className={getHeaderClass(index)}>
                            {moment()
                                .day(1 + index)
                                .format("ddd")}
                        </div>
                    </div>
                ))}
            </div>
            <div className="grid__container">
                {daysArray.map((dayItem) => (
                    <div
                        className={getWeekendClass(dayItem)}
                        key={dayItem.unix()}
                    >
                        <div className={getCurrentDayClass(dayItem)}>
                            <div
                                className={getCurrentMonthClass({
                                    day: dayItem,
                                    today
                                })}
                            >
                                {dayItem.format("D")}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

Grid.propTypes = {
    startDay: PropTypes.object,
    today: PropTypes.object
};

export default Grid;
