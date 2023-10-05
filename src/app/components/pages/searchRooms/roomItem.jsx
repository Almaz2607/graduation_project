import React from "react";
import PropTypes from "prop-types";

const RoomItem = ({ roomClass, numberOfGuests, price }) => {
    return (
        <div className="available-rooms__body">
            <div className="available-rooms__column-image">
                <div className="available-rooms__item item-block">
                    <div className="item-block__image">
                        {/* <img src="" alt="available-rooms" /> */}
                        <div className="item-block__info info-block">
                            <p className="info-block__title">{roomClass}</p>
                            <p className="info-block__text">
                                {`${numberOfGuests} гостя, завтрак включен `}
                            </p>
                        </div>
                        <div className="item-block__price price-block">
                            <p className="price-block__value">{`$ ${price}`}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="available-rooms__column-info">
                <p className="available-rooms__text">
                    Гостиница возле голубого озера, без шума от дороги. Ресторан
                    азиатской кухни с безлимитными завтраками из экологически
                    чистых продуктов. Комфортабельные номера и внимательный
                    персонал.
                </p>
                <p className="available-rooms__text">
                    Включены: завтрак, спортзал, парковка, бесплатный Wi-Fi
                </p>
                <button className="available-rooms__button">Подробно</button>
            </div>
        </div>
    );
};

RoomItem.propTypes = {
    roomClass: PropTypes.string,
    numberOfGuests: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default RoomItem;
