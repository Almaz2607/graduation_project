import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const NavMenu = () => {
    const { currentCustomer } = useAuth();

    return (
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
                    {currentCustomer ? (
                        <Link to="/logout" className="menu__link">
                            Выйти
                        </Link>
                    ) : (
                        <Link to="/login" className="menu__link">
                            Войти
                        </Link>
                    )}
                </li>
                <li className="menu__item">
                    <Link to="/admin" className="menu__link">
                        Админ
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavMenu;
