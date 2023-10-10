import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SelectField from "../../common/form/selectField";

const SelectionRooms = ({ onSelectedClass, onSelectedPrice }) => {
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
    const [data, setData] = useState({
        roomClass: "",
        roomPrice: ""
    });

    useEffect(() => {
        onSelectedClass(data.roomClass);
    }, [data.roomClass]);

    useEffect(() => {
        onSelectedPrice(data.roomPrice);
    }, [data.roomPrice]);

    const hanldeChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    return (
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
    );
};
SelectionRooms.propTypes = {
    onSelectedClass: PropTypes.func.isRequired,
    onSelectedPrice: PropTypes.func.isRequired
};

export default SelectionRooms;
