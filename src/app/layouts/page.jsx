import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../components/pages/home";
import About from "../components/pages/about";
import Rooms from "../components/pages/roomsPage/rooms";
import Login from "../components/login";
import Attractions from "../components/pages/attractions";

const Page = () => {
    return (
        <main className="page">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/attractions" component={Attractions} />
                <Route path="/rooms/:roomId?" component={Rooms} />
                <Route path="/login/:type?" component={Login} />
                <Redirect to="/" />
            </Switch>
        </main>
    );
};

export default Page;
