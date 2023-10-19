import React from "react";
import BookingBlock from "./bookingBlock";
import PriceInfoItem from "./priceInfoItem";

const IncludedPrice = () => {
    const priceTextInfo = [
        {
            id: 1,
            text: "Расположение комфортное, рядом магазины,транспорт, горы, озеро."
        },
        {
            id: 2,
            text: "Расположение комфортное, рядом магазины, транспорт, горы, озеро. Быть готовым к тому, что в номере тонкие стены."
        },
        {
            id: 3,
            text: "Быть готовым к тому, что в номере тонкие стены и шумные соседи."
        },
        {
            id: 4,
            text: "Рядом горы, озеро. Быть готовым к тому, что в номере тонкие стены."
        },
        {
            id: 5,
            text: "Рядом магазины, транспорт, горы, озеро. Для медитации номера не подойдут."
        },
        {
            id: 6,
            text: "Расположение комфортное, рядом магазины,транспорт, горы, озеро. В номере тонкие стены и шумные соседи. Для медитации номера не подойдут."
        }
    ];
    return (
        <section className="room-price">
            <div className="room-price__title title">
                <p className="title__text">Что включено в цену</p>
            </div>
            <div className="room-price__body">
                <div className="room-price__column_left">
                    <div className="room-price__row">
                        {priceTextInfo.map((item) => (
                            <PriceInfoItem key={item.id} text={item.text} />
                        ))}
                    </div>
                </div>
                <div className="room-price__column_right">
                    <BookingBlock />
                </div>
            </div>
        </section>
    );
};

export default IncludedPrice;
