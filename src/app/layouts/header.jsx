import React from "react";
import NavMenu from "../components/page/navMenu";

const Header = () => {
    return (
        <header className="header">
            <div className="header__container _container">
                <p className="header__logo">ISSYK-KYL</p>
                <NavMenu />
            </div>
        </header>
    );
};

export default Header;
