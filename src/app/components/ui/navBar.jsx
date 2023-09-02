import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav
            className="navbar navbar-light"
            style={{ backgroundColor: "lightgrey" }}
        >
            <div className="container-fluid">
                <div className="navbar-brand">ISSYK-KYL</div>
                <ul className="navbar-nav d-flex flex-row">
                    <li className="nav-item">
                        <Link to="/" className="nav-link p-2">
                            Главная
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link p-2">
                            Об отеле
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/rooms" className="nav-link p-2">
                            Номера
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link p-2">
                            Войти
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
