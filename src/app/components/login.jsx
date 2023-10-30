import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import LoginForm from "./ui/loginForm";
import RegisterForm from "./ui/registerForm";

const Login = () => {
    const history = useHistory();
    const { type } = useParams();
    const [formType, setFormType] = useState(
        type === "register" ? type : "login"
    );

    const handleClick = () => {
        history.push("/");
    };

    const toggleFormType = () => {
        setFormType((prevState) =>
            prevState === "register" ? "login" : "register"
        );
    };

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4 offset-md-4 shadow p-4 position-relative">
                    <button
                        className="position-absolute top-0 end-0 btn btn-light btn-sm"
                        onClick={handleClick}
                    >
                        <i className="bi bi-x-lg"></i>
                    </button>
                    {formType === "register" ? (
                        <>
                            <h3 className="text-center mb-4">Регистрация</h3>
                            <RegisterForm />
                            <p className="mt-3">
                                Есть аккаунт?{" "}
                                <a
                                    className="link-primary text-decoration-none"
                                    role="button"
                                    onClick={toggleFormType}
                                >
                                    Войдите!
                                </a>
                            </p>
                        </>
                    ) : (
                        <>
                            <h3 className="text-center mb-4">
                                Вход в личный кабинет
                            </h3>
                            <LoginForm />
                            <p className="mt-3">
                                Нет аккаунта?{" "}
                                <a
                                    className="link-primary text-decoration-none"
                                    role="button"
                                    onClick={toggleFormType}
                                >
                                    Зарегистрируйтесь!
                                </a>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
