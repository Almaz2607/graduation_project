import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SelectField from "../../common/form/selectField";

const FilterSortBlock = ({ onSelectedClass, onSortPrice }) => {
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
        sortMethod: ""
    });

    useEffect(() => {
        onSelectedClass(data.roomClass);
    }, [data.roomClass]);

    useEffect(() => {
        onSortPrice(data.sortMethod);
    }, [data.sortMethod]);

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
                            name="sortMethod"
                            onChange={hanldeChange}
                            value={data.sortMethod}
                            defaultOption="Выберите по цене"
                            options={roomPrices}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
FilterSortBlock.propTypes = {
    onSelectedClass: PropTypes.func.isRequired,
    onSortPrice: PropTypes.func.isRequired
};

export default FilterSortBlock;
