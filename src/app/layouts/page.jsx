import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../components/pages/home";
import About from "../components/pages/about";
import Rooms from "../components/pages/roomsPage/rooms";
import Login from "../components/login";
import Attractions from "../components/pages/attractions";
import AvailableRooms from "../components/pages/searchRooms/availableRooms";
import Payment from "../components/pages/payment";
import ConfirmPayment from "../components/pages/confirmPayment";
import Administrator from "../components/pages/adminPage/admin";
import Calendar from "../components/common/selectionRoom/calendar/calendar";

const Page = () => {
    return (
        <main className="page">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/calendar" component={Calendar} />
                <Route path="/about" component={About} />
                <Route path="/attractions" component={Attractions} />
                <Route path="/available" component={AvailableRooms} />
                <Route path="/rooms/:roomId?" component={Rooms} />
                <Route path="/login/:type?" component={Login} />
                <Route path="/admin/:status?" component={Administrator} />
                <Route path="/booking" component={Payment} />
                <Route path="/accepted" component={ConfirmPayment} />
                <Redirect to="/" />
            </Switch>
        </main>
    );
};

export default Page;
