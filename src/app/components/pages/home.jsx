import React from "react";
import { Link } from "react-router-dom";
import SelectionBlock from "../common/selectionBlock";

function Home() {
    return (
        <div className="home">
            <div className="home__image">
                <div className="_container">
                    <img
                        src="img/home/hotel.jpg"
                        alt="hotel"
                        width="960px"
                        height="500px"
                    />
                </div>
            </div>
            <SelectionBlock />
            <section className="home__comfort comfort">
                <div className="comfort__container _container">
                    <div className="comfort__column_left">
                        <div className="comfort__item_standard item-block">
                            <div className="item-block__image">
                                {/* <img src="" alt="standard" /> */}
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
                        <div className="comfort__item_suite item-block">
                            <div className="item-block__image">
                                {/* <img src="" alt="standard" /> */}
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
                    <div className="comfort__column_right">
                        <div className="comfort__header header-block">
                            <p className="header-block__title">Комфорт</p>
                            <p className="header-block__text">
                                Гостиница возле лазурного озера, вдали от шума и
                                суеты. Ресторан азиатской кухни с безлимитными
                                завтраками из экологически чистых продуктов,
                                комфортабельные номера.
                            </p>
                        </div>
                        <div className="comfort__item_senior item-block">
                            <div className="item-block__image">
                                {/* <img src="" alt="standard" /> */}
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
                        <div className="comfort__link link-block">
                            <Link to="/rooms" className="link-block___value">
                                Посмотреть все номера
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home__food food">
                <div className="food__container _container">
                    <div className="food__column_left">
                        <div className="food__header header-block">
                            <p className="header-block__title">Вкусная еда</p>
                            <p className="header-block__text">
                                Гостиница возле лазурного озера, вдали от шума и
                                суеты. Ресторан азиатской кухни с безлимитными
                                завтраками из экологически чистых продуктов,
                                комфортабельные номера.
                            </p>
                        </div>
                        <div className="food__item_1 item-block">
                            <div className="item-block__image">
                                {/* <img src="" alt="standard" /> */}
                                <div className="item-block__info info-block">
                                    <p className="info-block__title">
                                        Азиатская кухня
                                    </p>
                                    <p className="info-block__text">
                                        Более 30 блюд на любой вкус
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="food__review review-block">
                            <p className="review-block__text">
                                Расположение комфортное, рядом магазины,
                                транспорт, горы, озеро. Быть готовым к тому, что
                                в номере тонкие стены и шумные соседи. Для
                                медитаций и уединения номер не подойдет.
                                Дружелюбное и внимательное отношение.
                            </p>
                            <div className="review-block__signature">
                                <div className="review-block__circle" />
                                <div className="review-block__info">
                                    <p className="review-block__name">
                                        Андрей Пархоменко
                                    </p>
                                    <p className="review-block__date">
                                        15.07.2023
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="food__column_right">
                        <div className="food__item_2 item-block">
                            <div className="item-block__image">
                                {/* <img src="" alt="standard" /> */}
                            </div>
                        </div>
                        <div className="food__item_3 item-block">
                            <div className="item-block__image">
                                {/* <img src="" alt="standard" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home__activities activities">
                <div className="activities__container _container">
                    <div className="activities__column_left">
                        <div className="activities__item_1 item-block">
                            <div className="item-block__image">
                                {/* <img src="" alt="standard" /> */}
                                <div className="item-block__info info-block">
                                    <p className="info-block__title">Бассейн</p>
                                    <p className="info-block__text">
                                        25 метров на открытом воздухе
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="activities__item_2 item-block">
                            <div className="item-block__image">
                                {/* <img src="" alt="standard" /> */}
                                <div className="item-block__info info-block">
                                    <p className="info-block__title">
                                        Спортзал
                                    </p>
                                    <p className="info-block__text">
                                        Современные тренажеры
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="activities__column_right">
                        <div className="activities__header header-block">
                            <p className="header-block__title">Активности</p>
                            <p className="header-block__text">
                                Гостиница возле лазурного озера, вдали от шума и
                                суеты. Ресторан азиатской кухни с безлимитными
                                завтраками из экологически чистых продуктов,
                                комфортабельные номера.
                            </p>
                        </div>
                        <div className="activities__item_3 item-block">
                            <div className="item-block__image">
                                {/* <img src="" alt="standard" /> */}
                                <div className="item-block__info info-block">
                                    <p className="info-block__title">
                                        Горы и красоты
                                    </p>
                                    <p className="info-block__text">
                                        30 минут и ты наслаждаешься красотой гор
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="activities__link link-block">
                            <Link
                                to="/attractions"
                                className="link-block___value"
                            >
                                Посмотреть что рядом с отелем
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
