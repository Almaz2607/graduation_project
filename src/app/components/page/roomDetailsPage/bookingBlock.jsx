import React from "react";
import { Link } from "react-router-dom";

const BookingBlock = () => {
    return (
        <div className="room-price__column">
            <div className="room-price__booking-block">
                <div className="room-price__row-top">
                    <div className="room-price__top-column">
                        <div className="room-price__column-item">
                            <div className="room-price__item-title">Заезд</div>
                            <div className="room-price__item-info">03.08</div>
                        </div>
                        <div className="room-price__column-item">
                            <div className="room-price__item-title">Класс</div>
                            <div className="room-price__item-info">Люкс</div>
                        </div>
                        <div className="room-price__column-item">
                            <div className="room-price__item-title">
                                Цена за ночь
                            </div>
                            <div className="room-price__item-info">$ 75</div>
                        </div>
                    </div>
                    <div className="room-price__top-column">
                        <div className="room-price__column-item">
                            <div className="room-price__item-title">Выезд</div>
                            <div className="room-price__item-info">15.08</div>
                        </div>
                        <div className="room-price__column-item">
                            <div className="room-price__item-title">Гостей</div>
                            <div className="room-price__item-info">2 Гостя</div>
                        </div>
                        <div className="room-price__column-item">
                            <div className="room-price__item-title">
                                Количество ночей
                            </div>
                            <div className="room-price__item-info">12</div>
                        </div>
                    </div>
                </div>
                <div className="room-price__row-bottom">
                    <div className="room-price__bottom-body">
                        <p className="room-price__total-price">Итого: $900</p>
                        <Link to="/booking" className="room-price__booking">
                            Забронировать номер
                        </Link>
                        <p className="room-price__text-info">
                            Остались вопросы? Звони +(996)111-777-333
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingBlock;
