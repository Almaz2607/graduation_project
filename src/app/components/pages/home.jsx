import React from "react";
import { Link } from "react-router-dom";
import SelectionBlock from "../common/selectionBlock";
import Loader from "../common/loader";
import GuestReview from "../common/guestReview";
import useReviews from "../../hooks/useReviews";
import ImageBlock from "../common/imageBlock";

function Home() {
    const { reviews, pathName } = useReviews();

    if (reviews.length === 0) return <Loader />;
    const { text, name, surname, creationDate } = reviews[0];

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
                        <ImageBlock
                            name="comfort__item-standard"
                            path="home/room1"
                            alt="standard"
                            title="Стандарт"
                            text="2 Гостя, завтрак включен"
                            price="35"
                        />
                        <ImageBlock
                            name="comfort__item-suite"
                            path="home/room2"
                            alt="suiet"
                            title="Полулюкс"
                            text="2 Гостя, завтрак включен"
                            price="55"
                        />
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
                        <ImageBlock
                            name="comfort__item-senior"
                            path="home/room3"
                            alt="senior"
                            title="Люкс"
                            text="2 Гостя, завтрак включен"
                            price="75"
                        />
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
                        {
                            <GuestReview
                                path={pathName}
                                text={text}
                                name={name}
                                surname={surname}
                                date={creationDate}
                            />
                        }
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
                        <ImageBlock
                            name="activities__item-1"
                            path="home/pool"
                            alt="pool"
                            title="Бассейн"
                            text="25 метров на открытом воздухе"
                            price=""
                        />
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
