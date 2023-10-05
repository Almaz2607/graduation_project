import React from "react";
import NavigationMenu from "../components/pages/navigationMenu";

const Header = () => {
    return (
        <header className="header">
            <div className="header__container _container">
                <p className="header__logo">ISSYK-KYL</p>
                <NavigationMenu />
            </div>
        </header>
    );
};

export default Header;
