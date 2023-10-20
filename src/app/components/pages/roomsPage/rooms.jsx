import React from "react";
import Loader from "../../common/loader";
import SelectionBlock from "../../common/selectionBlock";
import RoomConditions from "./roomConditions";
import useConditions from "../../../hooks/useConditions";
import ImageBlock from "../../common/imageBlock";

const Rooms = () => {
    const { conditions } = useConditions();

    if (conditions.length === 0) return <Loader />;

    return (
        <div className="rooms">
            <SelectionBlock />
            <div className="rooms__container _container">
                <div className="rooms__block1">
                    <div className="rooms__block1-column-left">
                        <ImageBlock
                            name="rooms__block1-standard2"
                            path="rooms/room1"
                            alt="standard"
                            title="Стандарт"
                            text="2 гостя, завтрак включен"
                            price="35"
                        />
                        <ImageBlock
                            name="rooms__block1-suite2"
                            path="rooms/room2"
                            alt="suite"
                            title="Полулюкс"
                            text="2 гостя, завтрак включен"
                            price="55"
                        />
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
                        <ImageBlock
                            name="rooms__block1-senior2"
                            path="rooms/room3"
                            alt="senior"
                            title="Большой люкс"
                            text="2 гостя, завтрак включен"
                            price="75"
                        />
                    </div>
                </div>
                <div className="rooms__block2">
                    <div className="rooms__block2-column-left">
                        <ImageBlock
                            name="rooms__item-senior3"
                            path="rooms/room4"
                            alt="senior"
                            title="Люкс с видом"
                            text="3 гостя, завтрак включен"
                            price="75"
                        />
                    </div>
                    <div className="rooms__block2-column-right">
                        <ImageBlock
                            name="rooms__item-standard3"
                            path="rooms/room5"
                            alt="standard"
                            title="Стандарт"
                            text="3 гостя, завтрак включен"
                            price="55"
                        />
                        <ImageBlock
                            name="rooms__item-suite3"
                            path="rooms/room6"
                            alt="suite"
                            title="Полулюкс"
                            text="3 гостя, завтрак включен"
                            price="75"
                        />
                    </div>
                </div>
                <div className="rooms__conditions">
                    <p className="rooms__conditions-title">
                        Условия проживания и что есть в номерах
                    </p>
                    <div className="rooms__conditions-items">
                        {conditions.map((condition) => (
                            <RoomConditions
                                key={condition._id}
                                text={condition.text}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rooms;
