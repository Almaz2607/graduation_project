import React, { useEffect, useState } from "react";
import { validator } from "../../utils/validator";
import TextField from "../common/form/textField";
import api from "../../../api";
import SelectField from "../common/form/selectField";
import RadioField from "../common/form/radioField";
import MultiSelectField from "../common/form/multiSelectField";
import CheckBoxField from "../common/form/checkBoxField";

const RegisterForm = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        profession: "",
        sex: "male",
        qualities: [],
        licence: false
    });
    const [errors, setErrors] = useState({});
    const [qualities, setQualities] = useState({});
    const [professions, setProfessions] = useState([]);

    const hanldeChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
        api.qualities.fetchAll().then((data) => setQualities(data));
    }, []);

    const validatorConfig = {
        email: {
            isRequired: { message: "Поле email обязательно для заполнения" },
            isEmail: { message: "Email введен некорректно" }
        },
        password: {
            isRequired: { message: "Поле password обязательно для заполнения" },
            isCapitalSymbol: {
                message: "Пароль должен содержать хотя бы одну заглавную букву"
            },
            isContainDigit: {
                message: "Пароль должен содержать хотя бы одну цифру"
            },
            min: {
                message: "Пароль должен состоять минимум из 8 символов",
                value: 8
            }
        },
        profession: {
            isRequired: { message: "Обязательно выберите вашу профессию" }
        },
        licence: {
            isRequired: {
                message:
                    "Вы не можете исполльзовать наш сервис без подтверждения лицензионного соглашения"
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(data);
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
            <SelectField
                label="Выберите вашу профессию"
                name="profession"
                value={data.profession}
                onChange={hanldeChange}
                defaultOption="Choose..."
                options={professions}
                error={errors.profession}
            />
            <RadioField
                options={[
                    { name: "Male", value: "male" },
                    { name: "Female", value: "female" },
                    { name: "Other", value: "other" }
                ]}
                label="Выберите ваш пол"
                name="sex"
                value={data.sex}
                onChange={hanldeChange}
            />
            <MultiSelectField
                label="Выберите ваши качества"
                options={qualities}
                onChange={hanldeChange}
                name="qualities"
                value={data.qualities}
            />
            <CheckBoxField
                name="licence"
                value={data.licence}
                onChange={hanldeChange}
                error={errors.licence}
            >
                Подтвердить <a>лицензионное соглашение</a>
            </CheckBoxField>
            <button
                type="submit"
                className="btn btn-primary w-100 mx-auto"
                disabled={!isValid}
            >
                Submit
            </button>
        </form>
    );
};

export default RegisterForm;
