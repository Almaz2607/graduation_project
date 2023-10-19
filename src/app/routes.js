import Login from "./components/login";
import About from "./components/pages/about";
import Admin from "./components/pages/adminPage/admin";
import Attractions from "./components/pages/attractions";
import ConfirmPayment from "./components/pages/confirmPayment";
import Home from "./components/pages/home";
import Payment from "./components/pages/payment";
import Rooms from "./components/pages/roomsPage/rooms";

const routes = [
    { path: "/", display: false, name: "Home", component: Home },
    { path: "/about", display: false, name: "About", component: About },
    { path: "/rooms", display: false, name: "Rooms", component: Rooms },
    { path: "/login", display: false, name: "Login", component: Login },
    { path: "/admin", display: false, name: "Admin", component: Admin },
    { path: "/booking", name: "Payment", component: Payment },
    { path: "/accepted", name: "Confirm", component: ConfirmPayment },
    { path: "/attractions", name: "Attractions", component: Attractions }
];

export default routes;
