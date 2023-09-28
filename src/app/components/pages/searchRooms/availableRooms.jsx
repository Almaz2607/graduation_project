import React, { useEffect, useState } from "react";
import SelectField from "../../common/form/selectField";
import ItemRoom from "./itemRoom";
import api from "../../../../api";

const AvailableRooms = () => {
    const [data, setData] = useState({
        roomClass: "",
        roomPrice: ""
    });
    const [rooms, setRooms] = useState([]);
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

    if (rooms.length === 0) return;

    return (
        <div className="available-rooms">
            <div className="_container">
                <section className="available-rooms__top">
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
                </section>
                {rooms.map((room) => (
                    <ItemRoom
                        key={room._id}
                        roomClass={room.roomClass}
                        numberOfGuests={room.numberOfGuests}
                        price={room.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default AvailableRooms;
