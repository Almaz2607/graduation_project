import React from "react";
import BookingBlock from "./bookingBlock";

const IncludedPrice = () => {
    return (
        <section className="room-price">
            <div className="room-price__title title">
                <p className="title__text">Что включено в цену</p>
            </div>
            <div className="room-price__row">
                <div className="room-price__column">
                    <div className="room-price__item">
                        <div className="room-price__circle review-block__photo" />
                        <p className="review-block__text">
                            Расположение комфортное, рядом магазины, транспорт,
                            горы, озеро. Быть готовым к тому, что в номере
                            тонкие стены и шумные соседи.
                        </p>
                    </div>
                    <div className="room-price__item">
                        <div className="room-price__circle review-block__photo" />
                        <p className="review-block__text">
                            Расположение комфортное, рядом магазины, транспорт,
                            горы, озеро. Быть готовым к тому, что в номере
                            тонкие стены и шумные соседи.
                        </p>
                    </div>
                    <div className="room-price__item">
                        <div className="room-price__circle review-block__photo" />
                        <p className="review-block__text">
                            Расположение комфортное, рядом магазины, транспорт,
                            горы, озеро. Быть готовым к тому, что в номере
                            тонкие стены и шумные соседи.
                        </p>
                    </div>
                </div>
                <div className="room-price__column">
                    <div className="room-price__item">
                        <div className="room-price__circle review-block__photo" />
                        <p className="review-block__text">
                            Расположение комфортное, рядом магазины, транспорт,
                            горы, озеро. Быть готовым к тому, что в номере
                            тонкие стены и шумные соседи.
                        </p>
                    </div>
                    <div className="room-price__item">
                        <div className="room-price__circle review-block__photo" />
                        <p className="review-block__text">
                            Расположение комфортное, рядом магазины, транспорт,
                            горы, озеро. Быть готовым к тому, что в номере
                            тонкие стены и шумные соседи.
                        </p>
                    </div>
                    <div className="room-price__item">
                        <div className="room-price__circle review-block__photo" />
                        <p className="review-block__text">
                            Расположение комфортное, рядом магазины, транспорт,
                            горы, озеро. Быть готовым к тому, что в номере
                            тонкие стены и шумные соседи.
                        </p>
                    </div>
                </div>
                <BookingBlock />
            </div>
        </section>
    );
};

export default IncludedPrice;
