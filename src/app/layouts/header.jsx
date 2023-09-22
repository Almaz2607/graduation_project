import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="header__container _container">
                <p className="header__logo">ISSYK-KYL</p>
                <nav className="header__menu menu">
                    <ul className="menu__list">
                        <li className="menu__item">
                            <Link to="/" className="menu__link">
                                Главная
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link to="/about" className="menu__link">
                                Об отеле
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link to="/rooms" className="menu__link">
                                Номера
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link to="/login" className="menu__link">
                                Войти
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
