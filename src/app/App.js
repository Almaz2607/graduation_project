import React from "react";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import Page from "./layouts/page";

const App = () => {
    return (
        <div className="wrapper">
            <Header />
            <Page />
            <Footer />
        </div>
    );
};

export default App;
