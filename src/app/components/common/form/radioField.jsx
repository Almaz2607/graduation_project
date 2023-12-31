import React from "react";
import PropTypes from "prop-types";

const RadioField = ({ label, value, name, onChange, options }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };

    return (
        <div className="mb-4">
            <label className="form-label">{label}</label>
            <div>
                {options.map((option) => (
                    <div
                        key={option.name + "_" + option.value}
                        className="form-check"
                    >
                        <input
                            className="form-check-input"
                            type="radio"
                            name={name}
                            checked={option.value === value}
                            onChange={handleChange}
                            id={option.name + "_" + option.value}
                            value={option.value}
                        />
                        <label
                            className="form-check-label"
                            htmlFor={option.name + "_" + option.value}
                        >
                            {option.name}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

RadioField.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.array
};

export default RadioField;
