import React from "react";

const SelectionBlock = () => {
    return (
        <div className="selection">
            <div className="selection__container _container">
                <div className="selection__body">
                    <div className="selection__column">
                        <button className="selection__button">
                            Дата заезда
                        </button>
                        <p className="selection__text">20.08</p>
                    </div>
                    <div className="selection__column">
                        <button className="selection__button">
                            Дата выезда
                        </button>
                        <p className="selection__text">29.08</p>
                    </div>
                    <div className="selection__column">
                        <button className="selection__button">Номер</button>
                        <p className="selection__text">Стандарт</p>
                    </div>
                    <div className="selection__column">
                        <button className="selection__button">Гостей</button>
                        <p className="selection__text">2 Гостей</p>
                    </div>
                    <div className="selection__column_total">
                        <button className="selection__button_total">
                            Подобрать номер
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectionBlock;
