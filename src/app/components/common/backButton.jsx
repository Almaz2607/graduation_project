import React from "react";
import { useHistory } from "react-router-dom";

const BackHistoryButton = () => {
    const history = useHistory();

    const handleBack = () => {
        history.goBack();
    };

    return (
        <div className="back-block">
            <button className="back-block__button" onClick={handleBack}>
                Назад
            </button>
        </div>
    );
};

export default BackHistoryButton;
