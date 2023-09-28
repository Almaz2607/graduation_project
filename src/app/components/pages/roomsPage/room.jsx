import React from "react";
import SelectionBlock from "../../common/selectionBlock";

function Room() {
    return (
        <div className="room">
            <SelectionBlock />
            <div className="_container">
                <section className="room-about">
                    <div className="room-about__column">
                        <div className="room-about__item1 item-block">
                            <div className="item-block__image">
                                {/* <img src="" alt="image1" /> */}
                            </div>
                        </div>
                        <div className="room-about__item2 item-block">
                            <div className="item-block__image">
                                {/* <img src="" alt="image2" /> */}
                                <div className="item-block__info info-block">
                                    <p className="info-block__title">
                                        Вид из окна
                                    </p>
                                    <p className="info-block__text">
                                        Озеро Иссык-Куль
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="room-about__column">
                        <div className="room-about__header header-block">
                            <p className="header-block__title">
                                Большой люкс с видом на озеро
                            </p>
                            <p className="header-block__text">
                                Гостиница возле лазурного озера, вдали от шума и
                                суеты. Ресторан азиатской кухни с безлимитными
                                завтраками из экологически чистых продуктов,
                                комфортабельные номера.
                            </p>
                            <div className="header-block__items">
                                <div className="header-block__item">
                                    <div className="header-block__rectangle" />
                                    <p className="header-block__text">
                                        Одна двуспальная кровать и большой диван
                                    </p>
                                </div>
                                <div className="header-block__item">
                                    <div className="header-block__circles">
                                        <div className="header-block__circle" />
                                        <div className="header-block__circle" />
                                    </div>
                                    <p className="header-block__text">
                                        Номер на двоих (плюс один ребенок)
                                    </p>
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
                <section className="room-price">
                    <div className="room-price__title title">
                        <p className="title__text">Что включено в цену</p>
                    </div>
                    <div className="room-price__row">
                        <div className="room-price__column">
                            <div className="room-price__item">
                                <div className="room-price__circle review-block__circle" />
                                <p className="review-block__text">
                                    Расположение комфортное, рядом магазины,
                                    транспорт, горы, озеро. Быть готовым к тому,
                                    что в номере тонкие стены и шумные соседи.
                                </p>
                            </div>
                            <div className="room-price__item">
                                <div className="room-price__circle review-block__circle" />
                                <p className="review-block__text">
                                    Расположение комфортное, рядом магазины,
                                    транспорт, горы, озеро. Быть готовым к тому,
                                    что в номере тонкие стены и шумные соседи.
                                </p>
                            </div>
                            <div className="room-price__item">
                                <div className="room-price__circle review-block__circle" />
                                <p className="review-block__text">
                                    Расположение комфортное, рядом магазины,
                                    транспорт, горы, озеро. Быть готовым к тому,
                                    что в номере тонкие стены и шумные соседи.
                                </p>
                            </div>
                        </div>
                        <div className="room-price__column">
                            <div className="room-price__item">
                                <div className="room-price__circle review-block__circle" />
                                <p className="review-block__text">
                                    Расположение комфортное, рядом магазины,
                                    транспорт, горы, озеро. Быть готовым к тому,
                                    что в номере тонкие стены и шумные соседи.
                                </p>
                            </div>
                            <div className="room-price__item">
                                <div className="room-price__circle review-block__circle" />
                                <p className="review-block__text">
                                    Расположение комфортное, рядом магазины,
                                    транспорт, горы, озеро. Быть готовым к тому,
                                    что в номере тонкие стены и шумные соседи.
                                </p>
                            </div>
                            <div className="room-price__item">
                                <div className="room-price__circle review-block__circle" />
                                <p className="review-block__text">
                                    Расположение комфортное, рядом магазины,
                                    транспорт, горы, озеро. Быть готовым к тому,
                                    что в номере тонкие стены и шумные соседи.
                                </p>
                            </div>
                        </div>
                        <div className="room-price__column">
                            <div className="room-price__info-block">
                                <div className="room-price__row-top">
                                    <div className="room-price__top-column">
                                        <div className="room-price__column-item">
                                            <div className="room-price__item-title">
                                                Заезд
                                            </div>
                                            <div className="room-price__item-info">
                                                03.08
                                            </div>
                                        </div>
                                        <div className="room-price__column-item">
                                            <div className="room-price__item-title">
                                                Класс
                                            </div>
                                            <div className="room-price__item-info">
                                                Люкс
                                            </div>
                                        </div>
                                        <div className="room-price__column-item">
                                            <div className="room-price__item-title">
                                                Цена за ночь
                                            </div>
                                            <div className="room-price__item-info">
                                                $ 75
                                            </div>
                                        </div>
                                    </div>
                                    <div className="room-price__top-column">
                                        <div className="room-price__column-item">
                                            <div className="room-price__item-title">
                                                Выезд
                                            </div>
                                            <div className="room-price__item-info">
                                                15.08
                                            </div>
                                        </div>
                                        <div className="room-price__column-item">
                                            <div className="room-price__item-title">
                                                Гостей
                                            </div>
                                            <div className="room-price__item-info">
                                                2 Гостя
                                            </div>
                                        </div>
                                        <div className="room-price__column-item">
                                            <div className="room-price__item-title">
                                                Количество ночей
                                            </div>
                                            <div className="room-price__item-info">
                                                12
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="room-price__row-bottom">
                                    <div className="room-price__bottom-body">
                                        <p className="room-price__total-price">
                                            Итого: $900
                                        </p>
                                        <button className="room-price__booking">
                                            Забронировать номер
                                        </button>
                                        <p className="room-price__text-info">
                                            Остались вопросы? Звони
                                            +(996)111-777-333
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="room-reviews">
                    <div className="room-reviews__title title">
                        <p className="title__text">Отзывы гостей</p>
                    </div>
                    <div className="room-reviews__row">
                        <div className="room-reviews__column">
                            <div className="room-reviews__item review-block">
                                <p className="review-block__text">
                                    Расположение комфортное, рядом магазины,
                                    транспорт, горы, озеро. Быть готовым к тому,
                                    что в номере тонкие стены и шумные соседи.
                                    Для медитаций и уединения номер не подойдет.
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
                            <div className="room-reviews__item review-block">
                                <p className="review-block__text">
                                    Расположение комфортное, рядом магазины,
                                    транспорт, горы, озеро. Быть готовым к тому,
                                    что в номере тонкие стены и шумные соседи.
                                    Для медитаций и уединения номер не подойдет.
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
                        <div className="room-reviews__column">
                            <div className="room-reviews__item review-block">
                                <p className="review-block__text">
                                    Расположение комфортное, рядом магазины,
                                    транспорт, горы, озеро. Быть готовым к тому,
                                    что в номере тонкие стены и шумные соседи.
                                    Для медитаций и уединения номер не подойдет.
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
                            <div className="room-reviews__item review-block">
                                <p className="review-block__text">
                                    Расположение комфортное, рядом магазины,
                                    транспорт, горы, озеро. Быть готовым к тому,
                                    что в номере тонкие стены и шумные соседи.
                                    Для медитаций и уединения номер не подойдет.
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
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Room;
