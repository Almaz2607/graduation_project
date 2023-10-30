import React from "react";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import Page from "./layouts/page";
import AuthProvider from "./hooks/useAuth";

const App = () => {
    return (
        <div className="wrapper">
            <AuthProvider>
                <Header />
                <Page />
                <Footer />
            </AuthProvider>
        </div>
    );
};

export default App;
