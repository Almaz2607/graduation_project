import React from "react";
import PropTypes from "prop-types";

const Description = ({ room }) => {
    return (
        <section className="room-about">
            <div className="room-about__column_left">
                <div className="room-about__item1 item-block">
                    <div className="item-block__image">
                        {/* <img src="" alt="image1" /> */}
                    </div>
                </div>
                <div className="room-about__item2 item-block">
                    <div className="item-block__image">
                        {/* <img src="" alt="image2" /> */}
                        <div className="item-block__info info-block">
                            <p className="info-block__title">Вид из окна</p>
                            <p className="info-block__text">Озеро Иссык-Куль</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="room-about__column">
                <div className="room-about__header header-block">
                    <p className="header-block__title">
                        {`${room.title} с видом на озеро`}
                    </p>
                    <p className="header-block__text">
                        Гостиница возле лазурного озера, вдали от шума и суеты.
                        Ресторан азиатской кухни с безлимитными завтраками из
                        экологически чистых продуктов, комфортабельные номера.
                    </p>
                    <div className="header-block__items">
                        <div className="header-block__item">
                            <div className="header-block__rectangle" />
                            <div className="header-block__text">
                                Одна двуспальная кровать и большой диван
                            </div>
                        </div>
                        <div className="header-block__item">
                            <div className="header-block__circles">
                                <div className="header-block__circle" />
                                <div className="header-block__circle" />
                            </div>
                            <div className="header-block__text">
                                Номер на двоих (плюс один ребенок)
                            </div>
                        </div>
                    </div>
                </div>
                <div className="room-about__item3 item-block">
                    <div className="item-block__image">
                        {/* <img src="" alt="image3" /> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

Description.propTypes = {
    room: PropTypes.object
};

export default Description;
