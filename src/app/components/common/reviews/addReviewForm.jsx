import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { validator } from "../../../utils/validator";
import TextAreaField from "../form/textAreaField";
import { useAuth } from "../../../hooks/useAuth";

const initialData = {
    content: ""
};

const AddReviewForm = ({ onSubmit }) => {
    const [data, setData] = useState(initialData);
    const [errors, setErrors] = useState({});
    const { currentCustomer } = useAuth();
    const { _id, name, surname } = currentCustomer;

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validatorConfig = {
        content: {
            isRequired: {
                message: "Отзыв не может быть пустым"
            }
        }
    };

    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0;

    const clearForm = () => {
        setData(initialData);
        setErrors({});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const newData = {
            ...data,
            _id: Math.random().toString(36).substring(2, 14),
            created_at: Date.now(),
            customer_id: _id,
            name,
            surname
        };
        onSubmit(newData);
        clearForm();
    };

    return (
        <div className="card-body w-100">
            <h2>Новый отзыв</h2>
            <form onSubmit={handleSubmit}>
                <TextAreaField
                    value={data.content}
                    onChange={handleChange}
                    name="content"
                    label="Отзыв"
                    error={errors.content}
                />
                <div className="d-flex justify-content-end">
                    <button disabled={!isValid} className="btn btn-primary">
                        Опубликовать
                    </button>
                </div>
            </form>
        </div>
    );
};

AddReviewForm.propTypes = {
    onSubmit: PropTypes.func
};

export default AddReviewForm;
