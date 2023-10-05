import React, { useEffect, useState } from "react";
import SelectField from "../../common/form/selectField";
import RoomItem from "./roomItem";
import api from "../../../../api";
import Loader from "../../common/loader";

const AvailableRooms = () => {
    const [rooms, setRooms] = useState([]);
    const [data, setData] = useState({
        roomClass: "",
        roomPrice: ""
    });

    const roomClasses = [
        { value: "standard", name: "Стандарт" },
        { value: "suite", name: "Полулюкс" },
        { value: "senior", name: "Люкс" },
        { value: "allways", name: "Номера всех классов" }
    ];
    const roomPrices = [
        { value: "increase", name: "От дешевых к дорогим" },
        { value: "decrease", name: "От дорогих к дешевым" }
    ];

    useEffect(() => {
        api.rooms.fetchAll().then((data) => setRooms(data));
    }, []);

    const hanldeChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    return (
        <div className="available-rooms">
            <div className="_container">
                <div className="available-rooms__top">
                    <div className="available-rooms__column-left">
                        <div className="available-rooms___title title">
                            <p className="title__text">Доступные номера</p>
                        </div>
                    </div>
                    <div className="available-rooms__column-right">
                        <div className="available-rooms__fields">
                            <div className="available-rooms__field">
                                <SelectField
                                    label=""
                                    name="roomClass"
                                    onChange={hanldeChange}
                                    value={data.roomClass}
                                    defaultOption="Выберите класс номера"
                                    options={roomClasses}
                                />
                            </div>
                            <div className="available-rooms__field">
                                <SelectField
                                    label=""
                                    name="roomPrice"
                                    onChange={hanldeChange}
                                    value={data.roomPrice}
                                    defaultOption="Выберите по цене"
                                    options={roomPrices}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {rooms.length !== 0 ? (
                    rooms.map((room) => (
                        <RoomItem
                            key={room._id}
                            roomClass={room.roomClass}
                            numberOfGuests={room.numberOfGuests}
                            price={room.price}
                        />
                    ))
                ) : (
                    <Loader />
                )}
            </div>
        </div>
    );
};

export default AvailableRooms;
