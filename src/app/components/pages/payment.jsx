import React, { useState } from "react";
import CheckBoxField from "../common/form/checkBoxField";
import RadioField from "../common/form/radioField";
import TextField from "../common/form/textField";
import { Link } from "react-router-dom";

const Payment = () => {
    const [data, setData] = useState({
        licence: false,
        payment: "card",
        card: "",
        validity: ""
    });

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    return (
        <div className="pay">
            <div className="_container">
                <div className="pay__body">
                    <div className="pay__top">
                        <h1 className="pay__top-title">Проверка и оплата</h1>
                        <p className="pay__top-subtitle">
                            Проверяйте внимательно детали при заполнении!
                        </p>
                    </div>
                    <div className="pay__row">
                        <div className="pay__column">
                            <p className="pay__column-title">
                                Детали бронирования
                            </p>
                            <div className="pay__column-rows">
                                <div className="pay__column-row">
                                    <p className="pay__column-row-text">
                                        Дата проживания:
                                    </p>
                                    <p className="pay__column-row-data">
                                        03 августа - 15 августа (2022года)
                                    </p>
                                </div>
                                <div className="pay__column-row">
                                    <p className="pay__column-row-text">
                                        Количество гостей:
                                    </p>
                                    <p className="pay__column-row-data">
                                        2 Гостя
                                    </p>
                                </div>
                                <div className="pay__column-row">
                                    <p className="pay__column-row-text">
                                        Цена за ночь:
                                    </p>
                                    <p className="pay__column-row-data pay__column-row-data_big">
                                        $ 75
                                    </p>
                                </div>
                            </div>
                            <CheckBoxField
                                name="licence"
                                value={data.licence}
                                onChange={handleChange}
                            >
                                Заказать <a>трансфер от вокзала до отеля</a> -
                                ($ 10)
                            </CheckBoxField>
                            <p className="pay__column-title">Оплата</p>
                            <div className="pay__column-radio">
                                <RadioField
                                    options={[
                                        {
                                            name: "Оплатить картой всю стоимость проживания",
                                            value: "card"
                                        },
                                        {
                                            name: "Внести предоплату 10 процентов (остаток по прибытии)",
                                            value: "cash"
                                        }
                                    ]}
                                    label="Выберите способ оплаты"
                                    name="payment"
                                    value={data.payment}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="pay__column-payment">
                                <div className="pay__column-card-number">
                                    <TextField
                                        label="Номер карты"
                                        name="card"
                                        value={data.card}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="pay__column-input-items">
                                    <div className="pay__column-card-item">
                                        <TextField
                                            label="Срок действия"
                                            name="validity"
                                            value={data.validity}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="pay__column-card-item">
                                        <TextField
                                            label="Защитный код "
                                            name="cvv"
                                            value={data.cvv}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <Link
                                    to="/accepted"
                                    className="pay__column-button-payment"
                                >
                                    ОПЛАТИТЬ НОМЕР
                                </Link>
                            </div>
                        </div>
                        <div className="pay__column">
                            <div className="pay__column-info">
                                <div className="pay__column-info-top">
                                    <div className="pay__column-info-items">
                                        <div className="pay__column-info-item">
                                            <div className="pay__column-info-title">
                                                Большой люкс
                                            </div>
                                            <p className="pay__column-info-text">
                                                Номер на двоих
                                            </p>
                                        </div>
                                        <div className="pay__column-info-item">
                                            <div className="pay__column-info-image"></div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="pay__column-info-row">
                                    <p className="pay__column-info-text">
                                        Цена за период
                                    </p>
                                    <p className="pay__column-info-price">
                                        $ 900
                                    </p>
                                </div>
                                <div className="pay__column-info-row">
                                    <p className="pay__column-info-text">
                                        Трансфер
                                    </p>
                                    <p className="pay__column-info-price">
                                        $ 0
                                    </p>
                                </div>
                                <hr />
                                <div className="pay__column-info-total">
                                    Итого к оплате: $ 900
                                </div>
                                <p className="pay__column-info-phone">
                                    Остались вопросы? Звони +(996)777-111-333
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
