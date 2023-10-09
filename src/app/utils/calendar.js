import moment from "moment";

export const getHeaderClass = (day) => {
    return day === 5 || day === 6 ? "grid__cell-header_grey" : "";
};

export const getWeekendClass = (dayItem) => {
    const dayNumber = dayItem.day();

    return dayNumber === 0 || dayNumber === 6 ? "grid__cell-day_red" : "";
};

const isCurrentDay = (day) => moment().isSame(day, "day");

export const getCurrentDayClass = (day) => {
    return isCurrentDay(day) ? "grid__cell_yellow" : "";
};

const isCurrentMonth = ({ day, today }) => today.isSame(day, "month");

export const getCurrentMonthClass = (props) => {
    return isCurrentMonth(props)
        ? "grid__cell-month"
        : "grid__cell-month_lighter";
};
