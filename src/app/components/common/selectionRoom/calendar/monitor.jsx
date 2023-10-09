import React from "react";
import PropTypes from "prop-types";

const Monitor = ({ today, prevHandler, todayHandler, nextHandler }) => {
    return (
        <div className="monitor__body">
            <div className="monitor__row">
                <div className="monitor__date">
                    <span className="monitor__month">
                        {today.format("MMMM")}
                    </span>
                    <span className="monitor__year">
                        {today.format("YYYY")}
                    </span>
                </div>
                <div className="monitor__buttons">
                    <button className="monitor__button" onClick={prevHandler}>
                        &lt;
                    </button>
                    <button className="monitor__button" onClick={todayHandler}>
                        Today
                    </button>
                    <button className="monitor__button" onClick={nextHandler}>
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

Monitor.propTypes = {
    today: PropTypes.object,
    prevHandler: PropTypes.func,
    todayHandler: PropTypes.func,
    nextHandler: PropTypes.func
};

export default Monitor;
