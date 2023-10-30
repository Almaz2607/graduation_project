import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/page/home";
import About from "../components/page/about";
import Rooms from "../components/page/roomsPage/rooms";
import Login from "../components/login";
import Attractions from "../components/page/attractions";
import Payment from "../components/page/payment";
import ConfirmPayment from "../components/page/confirmPayment";
import Admin from "../components/page/adminPage/admin";
import NotFound from "../components/page/notFound";
import AvailableRooms from "../components/page/availableRooms";
import { ToastContainer } from "react-toastify";
import CustomerProvider from "../hooks/useCustomers";
import RoomProvider from "../hooks/useRooms";
import ReviewProvider from "../hooks/useReviews";
import ReviewsPage from "../components/page/reviewsPage";
import ProtectedRoute from "../components/common/protectedRoute";

const Page = () => {
    return (
        <main className="page">
            <CustomerProvider>
                <RoomProvider>
                    <ReviewProvider>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/about" component={About} />
                            <ProtectedRoute
                                path="/reviews"
                                component={ReviewsPage}
                            />
                            <Route
                                path="/selection/:roomId?"
                                component={AvailableRooms}
                            />
                            <Route path="/rooms" component={Rooms} />
                            <Route
                                path="/attractions"
                                component={Attractions}
                            />
                            <Route path="/login/:type?" component={Login} />
                            <ProtectedRoute
                                path="/admin/:status?"
                                component={Admin}
                            />
                            <Route path="/booking" component={Payment} />
                            <Route
                                path="/accepted"
                                component={ConfirmPayment}
                            />
                            <Route component={NotFound} />
                        </Switch>
                    </ReviewProvider>
                </RoomProvider>
            </CustomerProvider>

            <ToastContainer />
        </main>
    );
};

export default Page;
