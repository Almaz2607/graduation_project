import React from "react";
import NavBar from "./components/navBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import SignUp from "./components/signup";
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
                    <Route path="/login" component={Login} />
                    <Route path="/singup" component={SignUp} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </div>
    );
};

export default App;
