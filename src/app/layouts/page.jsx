import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/pages/home";
import About from "../components/pages/about";
import Rooms from "../components/pages/roomsPage/rooms";
import Login from "../components/login";
import Attractions from "../components/pages/attractions";
import Payment from "../components/pages/payment";
import ConfirmPayment from "../components/pages/confirmPayment";
import Admin from "../components/pages/adminPage/admin";
import NotFound from "../components/pages/notFound";
import AvailableRooms from "../components/pages/availableRooms";
import { ToastContainer } from "react-toastify";
import AuthProvider from "../hooks/useAuth";

const Page = () => {
    return (
        <main className="page">
            <AuthProvider>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route
                        path="/selection/:roomId?"
                        component={AvailableRooms}
                    />
                    <Route path="/rooms" component={Rooms} />
                    <Route path="/attractions" component={Attractions} />
                    <Route path="/login/:type?" component={Login} />
                    <Route path="/admin/:status?" component={Admin} />
                    <Route path="/booking" component={Payment} />
                    <Route path="/accepted" component={ConfirmPayment} />
                    <Route component={NotFound} />
                </Switch>
            </AuthProvider>

            <ToastContainer />
        </main>
    );
};

export default Page;
