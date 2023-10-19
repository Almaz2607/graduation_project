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
import UserProvider from "../hooks/useUsers";

const Page = () => {
    return (
        <main className="page">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/attractions" component={Attractions} />
                <UserProvider>
                    <Route path="/user/:roomId?" component={AvailableRooms} />
                </UserProvider>
                <Route path="/rooms" component={Rooms} />
                <Route path="/login/:type?" component={Login} />
                <Route path="/admin/:status?" component={Admin} />
                <Route path="/booking" component={Payment} />
                <Route path="/accepted" component={ConfirmPayment} />
                <Route component={NotFound} />
            </Switch>

            <ToastContainer />
        </main>
    );
};

export default Page;
