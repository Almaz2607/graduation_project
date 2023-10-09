import React from "react";
import SelectionBlock from "../../common/selectionRoom/selectionBlock";

function RoomsList() {
    return (
        <div className="rooms">
            <SelectionBlock />
            <div className="rooms__container _container">
                <section className="rooms__block1">
                    <div className="rooms__block1-column-left">
                        <div className="rooms__block1-item-standard2 item-block">
                            <div className="item-block__image">
                                {/* <img src="" alt="standard2" /> */}
                                <div className="item-block__info info-block">
                                    <p className="info-block__title">
                                        Стандарт
                                    </p>
                                    <p className="info-block__text">
                                        2 Гостя, завтрак включен
                                    </p>
                                </div>
                                <div className="item-block__price price-block">
                                    <p className="price-block__value">$ 35</p>
                                </div>
                            </div>
                        </div>
                        <div className="rooms__block1-item-suite2 item-block">
                            <div className="item-block__image">
                                {/* <img src="" alt="suite2" /> */}
                                <div className="item-block__info info-block">
                                    <p className="info-block__title">
                                        Полулюкс
                                    </p>
                                    <p className="info-block__text">
                                        2 Гостя, завтрак включен
                                    </p>
                                </div>
                                <div className="item-block__price price-block">
                                    <p className="price-block__value">$ 55</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rooms__block1-column-right">
                        <div className="rooms__block1-header header-block">
                            <p className="header-block__title">
                                Уютные номера с видом на озеро
                            </p>
                            <p className="header-block__text">
                                Гостиница возле лазурного озера, вдали от шума и
                                суеты. Ресторан азиатской кухни с безлимитными
                                завтраками из экологически чистых продуктов,
                                комфортабельные номера.
                            </p>
                        </div>
                        <div className="rooms__block1-item-senior2 item-block">
                            <div className="item-block__image">
                                {/* <img src="" alt="senior2" /> */}
                                <div className="item-block__info info-block">
                                    <p className="info-block__title">
                                        Большой люкс
                                    </p>
                                    <p className="info-block__text">
                                        2 Гостя, завтрак включен
                                    </p>
                                </div>
                                <div className="item-block__price price-block">
                                    <p className="price-block__value">$ 75</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="rooms__block2">
                    <div className="rooms__block2-column-left">
                        <div className="rooms__item-senior3 item-block">
                            <div className="item-block__image">
                                {/* <img src="" alt="senior2" /> */}
                                <div className="item-block__info info-block">
                                    <p className="info-block__title">
                                        Люкс с видом
                                    </p>
                                    <p className="info-block__text">
                                        2 гостя, завтрак включен
                                    </p>
                                </div>
                                <div className="item-block__price price-block">
                                    <p className="price-block__value">$ 75</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rooms__block2-column-right">
                        <div className="rooms__item-standard3 item-block">
                            <div className="item-block__image">
                                {/* <img src="" alt="standard3" /> */}
                                <div className="item-block__info info-block">
                                    <p className="info-block__title">
                                        Стандарт
                                    </p>
                                    <p className="info-block__text">
                                        3 Гостя, завтрак включен
                                    </p>
                                </div>
                                <div className="item-block__price price-block">
                                    <p className="price-block__value">$ 55</p>
                                </div>
                            </div>
                        </div>
                        <div className="rooms__item-suite3 item-block">
                            <div className="item-block__image">
                                {/* <img src="" alt="suite3" /> */}
                                <div className="item-block__info info-block">
                                    <p className="info-block__title">
                                        Полулюкс
                                    </p>
                                    <p className="info-block__text">
                                        3 Гостя, завтрак включен
                                    </p>
                                </div>
                                <div className="item-block__price price-block">
                                    <p className="price-block__value">$ 75</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="rooms__conditions">
                    <p className="rooms__conditions-title">
                        Условия проживания и что есть в номерах
                    </p>
                    <div className="rooms__conditions-items">
                        <div className="rooms__conditions-item ">
                            <div className="rooms__conditions-circle review-block__circle" />
                            <p className="review-block__text">
                                Расположение комфортное, рядом магазины,
                                транспорт, горы, озеро. Быть готовым к тому, что
                                в номере тонкие стены и шумные соседи.
                            </p>
                        </div>
                        <div className="rooms__conditions-item ">
                            <div className="rooms__conditions-circle review-block__circle" />
                            <p className="review-block__text">
                                Расположение комфортное, рядом магазины,
                                транспорт, горы, озеро. Быть готовым к тому, что
                                в номере тонкие стены и шумные соседи.
                            </p>
                        </div>
                        <div className="rooms__conditions-item ">
                            <div className="rooms__conditions-circle review-block__circle" />
                            <p className="review-block__text">
                                Расположение комфортное, рядом магазины,
                                транспорт, горы, озеро. Быть готовым к тому, что
                                в номере тонкие стены и шумные соседи.
                            </p>
                        </div>
                        <div className="rooms__conditions-item ">
                            <div className="rooms__conditions-circle review-block__circle" />
                            <p className="review-block__text">
                                Расположение комфортное, рядом магазины,
                                транспорт, горы, озеро. Быть готовым к тому, что
                                в номере тонкие стены и шумные соседи.
                            </p>
                        </div>
                        <div className="rooms__conditions-item ">
                            <div className="rooms__conditions-circle review-block__circle" />
                            <p className="review-block__text">
                                Расположение комфортное, рядом магазины,
                                транспорт, горы, озеро. Быть готовым к тому, что
                                в номере тонкие стены и шумные соседи.
                            </p>
                        </div>
                        <div className="rooms__conditions-item ">
                            <div className="rooms__conditions-circle review-block__circle" />
                            <p className="review-block__text">
                                Расположение комфортное, рядом магазины,
                                транспорт, горы, озеро. Быть готовым к тому, что
                                в номере тонкие стены и шумные соседи.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default RoomsList;
