import React from "react";
import { Link } from "react-router-dom";

const NavigationMenu = () => {
    const menuItems = [
        { _id: "67rdca3eeb7f6fgeed471198", name: "Главная", path: "/" },
        { _id: "67rdca3eeb7f6fgeed471101", name: "Об отеле", path: "/about" },
        { _id: "67rdca3eeb7f6fgeed471234", name: "Номера", path: "/rooms" },
        { _id: "67rdca3eeb7f6fgeed471908", name: "Войти", path: "/login" },
        { _id: "67rdca3eeb7f6fgeed471719", name: "Админ", path: "/admin" }
    ];

    return (
        <nav className="header__menu menu">
            <ul className="menu__list">
                {menuItems.map((item) => (
                    <li className="menu__item" key={item._id}>
                        <Link to={item.path} className="menu__link">
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavigationMenu;
