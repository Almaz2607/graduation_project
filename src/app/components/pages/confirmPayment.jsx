import React from "react";

const ConfirmPayment = () => {
    return (
        <div className="confirm">
            <div className="_container">
                <div className="pay__top">
                    <h1 className="pay__top-title">Оплата принята!</h1>
                    <p className="pay__top-subtitle">
                        Проверяйте внимательно детали при заполнении!
                    </p>
                </div>
                <div className="confirm__content">
                    <div className="confirm__content-title">
                        Как добраться до отеля
                    </div>
                    <div className="confirm__content-item item-block">
                        <div className="item-block__image">
                            {/* <img src="" alt="standard" /> */}
                            <div className="item-block__button button-block">
                                <button className="button-block__text">
                                    Скачать карту
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="confirm__contacts">
                    <div className="confirm__content-title">
                        Как с нами связаться
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmPayment;
