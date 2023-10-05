import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../../api";
import SelectionBlock from "../common/selectionBlock";
import GuestReview from "../common/guestReview";
import Loader from "../common/loader";

const About = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        api.reviews.fetchAll().then((data) => setReviews(data));
    }, []);

    return (
        <>
            {reviews.length !== 0 ? (
                <div className="page-about about">
                    <SelectionBlock />
                    <div className="about__description description">
                        <div className="description__container _container">
                            <div className="description__column_left">
                                <div className="description__item_rooms item-block">
                                    <div className="item-block__image">
                                        {/* <img src="" alt="standard" /> */}
                                        <div className="item-block__info info-block">
                                            <p className="info-block__title">
                                                Комфортные номера
                                            </p>
                                            <p className="info-block__text">
                                                20 номеров с видом на озеро
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="description__item_gym item-block">
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
                                <div className="description__item_pool item-block">
                                    <div className="item-block__image">
                                        {/* <img src="" alt="standard" /> */}
                                        <div className="item-block__info info-block">
                                            <p className="info-block__title">
                                                Бассейн
                                            </p>
                                            <p className="info-block__text">
                                                25 метров на открытом воздухе
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="description__column_right">
                                <div className="description__header header-block">
                                    <p className="header-block__title">
                                        Отель у озера в горах Тянь-Шаня
                                    </p>
                                    <div className="header-block__description">
                                        <p className="header-block__text">
                                            Отель Иссык-Куль расположен в городе
                                            Чолпон-Ата, на берегу озера
                                            Иссык-Куль. Номера оформлены в
                                            загородном стиле и оснащены
                                            телевизором, холодильником и феном.
                                            Номера оформлены в загородном стиле
                                            и оснащены телевизором,
                                            холодильником и феном.
                                        </p>
                                        <p className="header-block__text">
                                            В отеле находится ресторан азиатской
                                            кухни. Гости также могут
                                            воспользоваться принадлежностями для
                                            барбекю.
                                        </p>
                                        <p className="header-block__text">
                                            Автовокзал города Чолпон-Ата
                                            находится в 2.5 км от отеля, а
                                            расстояние до аэропорта Тамчи
                                            составляет 25 км.
                                        </p>
                                    </div>
                                </div>
                                <div className="description__item_mountain item-block">
                                    <div className="item-block__image">
                                        {/* <img src="" alt="standard" /> */}
                                        <div className="item-block__info info-block">
                                            <p className="info-block__title">
                                                Горы и красоты
                                            </p>
                                            <p className="info-block__text">
                                                Открыты туры, где ты
                                                наслаждаешься красотой гор и
                                                природы
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="description__link link-block">
                                    <Link
                                        to="/attractions"
                                        className="link-block___value"
                                    >
                                        Посмотреть что рядом с отелем
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about__restaurant restaurant">
                        <div className="restaurant__container _container">
                            <div className="restaurant__column_left">
                                <div className="restaurant__header header-block">
                                    <p className="header-block__title">
                                        Ресторан
                                    </p>
                                    <p className="header-block__text">
                                        Гостиница возле лазурного озера, вдали
                                        от шума и суеты. Ресторан азиатской
                                        кухни с безлимитными завтраками из
                                        экологически чистых продуктов,
                                        комфортабельные номера.
                                    </p>
                                </div>
                                <div className="restaurant__item_1 item-block">
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
                                <div className="restaurant__link link-block">
                                    <Link
                                        to="/menu"
                                        className="link-block___value"
                                    >
                                        Посмотреть меню
                                    </Link>
                                </div>
                            </div>
                            <div className="restaurant__column_right">
                                <div className="restaurant__item_2 item-block">
                                    <div className="item-block__image">
                                        {/* <img src="" alt="standard" /> */}
                                    </div>
                                </div>
                                <div className="restaurant__item_3 item-block">
                                    <div className="item-block__image">
                                        {/* <img src="" alt="standard" /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about__services services">
                        <div className="services__container _container">
                            <div className="services__header header-block">
                                <h3 className="header-block__title">
                                    Услуги отеля
                                </h3>
                                <p className="header-block__text">
                                    Гостиница возле лазурного озера, вдали от
                                    шума и суеты. Ресторан азиатской кухни с
                                    безлимитными завтраками из экологически
                                    чистых продуктов, комфортабельные номера.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="about__reviews reviews">
                        <div className="reviews__container _container">
                            <div className="reviews__body">
                                <div className="reviews__header header-block">
                                    <h3 className="header-block__title">
                                        Отзывы гостей
                                    </h3>
                                </div>
                                <div className="reviews__row">
                                    {reviews.map((review) => (
                                        <GuestReview
                                            key={review._id}
                                            text={review.text}
                                            name={review.name}
                                            surname={review.surname}
                                            date={review.creationDate}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default About;
