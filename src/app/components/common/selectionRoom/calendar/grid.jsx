import React from "react";
import moment from "moment";
import PropTypes from "prop-types";

const Grid = ({ startDay, today }) => {
    const totalDays = 42;
    const day = startDay.clone().subtract(1, "day");
    const daysArray = [...Array(totalDays)].map(() =>
        day.add(1, "day").clone()
    );

    const getHeaderClass = (day) => {
        return day === 5 || day === 6 ? "grid__cell-header_grey" : "";
    };

    const getWeekendClass = (dayItem) => {
        const dayNumber = dayItem.day();
        const initClass = "grid__cell";

        return dayNumber === 0 || dayNumber === 6
            ? `${initClass}_lighter`
            : initClass;
    };

    const isCurrentDay = (day) => moment().isSame(day, "day");
    const isCurrentMonth = (day) => today.isSame(day, "month");

    const getCurrentDayClass = (day) => {
        return isCurrentDay(day) ? "grid__cell-day_red" : "";
    };

    const getCurrentMonthClass = (day) => {
        return isCurrentMonth(day) ? "" : "grid__cell-month_lighter";
    };

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
                        <div className="grid__cell-row">
                            <div className={getCurrentDayClass(dayItem)}>
                                <div className={getCurrentMonthClass(dayItem)}>
                                    {dayItem.format("D")}
                                </div>
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
