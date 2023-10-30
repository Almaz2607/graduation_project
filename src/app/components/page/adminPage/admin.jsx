import React from "react";
import RoomsStatus from "./roomsStatus";
import ShowRooms from "./showRooms";
import { useParams } from "react-router-dom";
import Loader from "../../common/loader";
import { useRoom } from "../../../hooks/useRooms";

const Admin = () => {
    const { rooms } = useRoom();

    const params = useParams();
    const { status } = params;

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
