import React, { useEffect, useState } from "react";
import RoomsStatus from "./roomsStatus";
import api from "../../../../api";
import ShowRooms from "./showRooms";
import { useParams } from "react-router-dom";
import Loader from "../../common/loader";

const Admin = () => {
    const [rooms, setRooms] = useState([]);
    const params = useParams();
    const { status } = params;

    useEffect(() => {
        api.rooms.fetchAll().then((data) => setRooms(data));
    }, []);

    const freeRooms = rooms.filter((room) => room.available === true);
    const reservedRooms = rooms.filter((room) => room.available === false);

    return (
        <div className="admin">
            <div className="_container">
                <div className="admin__title title">
                    <div className="title__text">Страница администратора</div>
                </div>
                {rooms.length === 0 ? (
                    <Loader />
                ) : (
                    <div className="admin__content">
                        {status === "free" ? (
                            <ShowRooms
                                rooms={freeRooms}
                                title="Доступные номера"
                            />
                        ) : status === "reserved" ? (
                            <ShowRooms
                                rooms={reservedRooms}
                                title="Зарезервированные номера"
                            />
                        ) : (
                            <RoomsStatus />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Admin;
