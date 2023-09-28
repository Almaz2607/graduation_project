import React, { useState } from "react";
import { useParams } from "react-router-dom";
import LoginForm from "./ui/loginForm";
import RegisterForm from "./ui/registerForm";

const Login = () => {
    const { type } = useParams();
    const [formType, setFormType] = useState(
        type === "register" ? type : "login"
    );

    const toggleFormType = () => {
        setFormType((prevState) =>
            prevState === "register" ? "login" : "register"
        );
    };

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    {formType === "register" ? (
                        <>
                            <h3 className="mb-4">Register</h3>
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
                            <h3 className="mb-4">Login</h3>
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
