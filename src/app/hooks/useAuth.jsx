import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { toast } from "react-toastify";
import customerService from "../services/customer.service";
import localStorageService, {
    setTokens
} from "../services/localStorage.service";
import Loader from "../components/common/loader";
import { useHistory } from "react-router-dom";

export const httpAuth = axios.create({
    baseURL: "https://identitytoolkit.googleapis.com/v1/",
    params: {
        key: process.env.REACT_APP_FIREBASE_KEY
    }
});
const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
    const [currentCustomer, setCustomer] = useState();
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const history = useHistory();

    async function logIn({ email, password }) {
        try {
            const { data } = await httpAuth.post(
                `accounts:signInWithPassword`,
                { email, password, returnSecureToken: true }
            );
            setTokens(data);
            await getCustomerData();
        } catch (error) {
            errorCatcher(error);
            const { code, message } = error.response.data.error;
            if (code === 400) {
                switch (message) {
                    case "INVALID_LOGIN_CREDENTIALS":
                        throw new Error("Email или пароль введены некорректно");
                    default:
                        throw new Error(
                            "Слишком много попыток входа. Попробуйте позднее"
                        );
                }
            }
        }
    }

    function logOut() {
        localStorageService.removeAuthData();
        setCustomer(null);
        history.push("/");
    }

    async function signUp({ email, password, ...rest }) {
        try {
            const { data } = await httpAuth.post(`accounts:signUp`, {
                email,
                password,
                returnSecureToken: true
            });
            setTokens(data);
            await createCustomer({ _id: data.localId, email, ...rest });
        } catch (error) {
            errorCatcher(error);
            const { code, message } = error.response.data.error;
            if (code === 400) {
                if (message === "EMAIL_EXISTS") {
                    const errorObject = {
                        email: "Пользователь с таким Email уже существует"
                    };
                    throw errorObject;
                }
            }
        }
    }

    async function createCustomer(data) {
        try {
            const { content } = await customerService.create(data);
            setCustomer(content);
        } catch (error) {
            errorCatcher(error);
        }
    }

    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
    }

    async function getCustomerData() {
        try {
            const { content } = await customerService.getCurrentCustomer();
            setCustomer(content);
        } catch (error) {
            errorCatcher(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (localStorageService.getAccessToken()) {
            getCustomerData();
        } else {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (error !== null) {
            toast(error);
            setError(null);
        }
    }, [error]);

    return (
        <AuthContext.Provider
            value={{ signUp, logIn, currentCustomer, logOut }}
        >
            {isLoading ? <Loader /> : children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default AuthProvider;
