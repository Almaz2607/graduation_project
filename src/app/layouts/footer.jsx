import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container _container">
                <div className="footer__contacts">
                    <p className="footer__column">
                        г. Чолпон-Ата ул. Степная,7 Иссык-Кульская область
                        республика Кыргызстан
                    </p>
                    <p className="footer__column">
                        Ресепшн: +(996) 777-111-222 Бронирование номеров: +(996)
                        777-111-333
                    </p>
                    <p className="footer__column">
                        Почта: issyk-kul2023@gmail.com Телеграмм:
                        t.me/almazkubakaev
                    </p>
                </div>
                <div className="footer__row">
                    <div className="footer__info">
                        <p className="footer__name">Issyk-Kul Hotel</p>
                        <p className="footer__year">Kyrgyzstan 2023</p>
                    </div>
                    <div className="footer__decor">
                        <div className="footer__circle" />
                        <div className="footer__circle" />
                        <div className="footer__circle" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
