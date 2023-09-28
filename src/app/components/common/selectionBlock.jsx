import React from "react";
import { Link } from "react-router-dom";

const SelectionBlock = () => {
    return (
        <div className="selection">
            <div className="selection__container _container">
                <div className="selection__body">
                    <div className="selection__column">
                        <button className="selection__button">
                            Дата заезда
                        </button>
                        <p className="selection__text">03.08</p>
                    </div>
                    <div className="selection__column">
                        <button className="selection__button">
                            Дата выезда
                        </button>
                        <p className="selection__text">15.08</p>
                    </div>
                    <div className="selection__column">
                        <button className="selection__button">Номер</button>
                        <p className="selection__text">Люкс</p>
                    </div>
                    <div className="selection__column">
                        <button className="selection__button">Гостей</button>
                        <p className="selection__text">2 Гостей</p>
                    </div>
                    <div className="selection__column-total">
                        <Link to="/available" className="selection__link-total">
                            Подобрать номер
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectionBlock;
