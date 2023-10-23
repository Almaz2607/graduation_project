import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { validator } from "../../utils/validator";
import TextField from "../common/form/textField";
import CheckBoxField from "../common/form/checkBoxField";
import { useAuth } from "../../hooks/useAuth";

const LoginForm = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        stayOn: false
    });
    const history = useHistory();
    const { logIn } = useAuth();
    const [errors, setErrors] = useState({});
    const [enterError, setEnterError] = useState(null);

    const hanldeChange = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
        setEnterError(null);
    };

    const validatorConfig = {
        email: {
            isRequired: { message: "Поле email обязательно для заполнения" }
        },
        password: {
            isRequired: { message: "Поле password обязательно для заполнения" }
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;

        try {
            await logIn(data);
            history.push("/");
        } catch (error) {
            setEnterError(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Электронная почта"
                name="email"
                value={data.email}
                onChange={hanldeChange}
                error={errors.email}
            />
            <TextField
                label="Пароль"
                type="password"
                name="password"
                value={data.password}
                onChange={hanldeChange}
                error={errors.password}
            />
            <CheckBoxField
                name="stayOn"
                value={data.stayOn}
                onChange={hanldeChange}
            >
                Оставаться в системе
            </CheckBoxField>
            {enterError && <p className="text-danger">{enterError}</p>}
            <button
                type="submit"
                className="btn btn-primary w-100 mx-auto"
                disabled={!isValid || enterError}
            >
                Submit
            </button>
        </form>
    );
};

export default LoginForm;
