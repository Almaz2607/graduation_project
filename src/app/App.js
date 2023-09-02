import React from "react";
import NavBar from "./components/ui/navBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Rooms from "./components/rooms";
import Login from "./layouts/login";

const App = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/rooms/:roomId?" component={Rooms} />
                    <Route path="/login/:type?" component={Login} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </div>
    );
};

export default App;
