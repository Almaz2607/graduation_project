import React, { useState } from "react";
import moment from "moment";
import Top from "./top";
import Monitor from "./monitor";
import Grid from "./grid";

const Calendar = () => {
    // window.moment = moment;
    moment.updateLocale("en", { week: { dow: 1 } });

    const [today, setToday] = useState(moment());
    const startDay = today.clone().startOf("month").startOf("week");

    const prevHandler = () =>
        setToday((prev) => prev.clone().subtract(1, "month"));
    const todayHandler = () => setToday(moment());
    const nextHandler = () => setToday((prev) => prev.clone().add(1, "month"));

    return (
        <div className="calendar _container">
            <div className="calendar__body">
                <Top />
                <Monitor
                    today={today}
                    prevHandler={prevHandler}
                    todayHandler={todayHandler}
                    nextHandler={nextHandler}
                />
                <Grid startDay={startDay} today={today} />
            </div>
        </div>
    );
};

export default Calendar;
