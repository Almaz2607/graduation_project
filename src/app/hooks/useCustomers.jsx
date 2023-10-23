import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import Loader from "../components/common/loader";
import customerService from "../services/customer.service";

const CustomerContext = React.createContext();

export const useCustomer = () => {
    return useContext(CustomerContext);
};

const CustomerProvider = ({ children }) => {
    const [customers, setCustomers] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getCustomers();
    }, []);

    async function getCustomers() {
        try {
            const { content } = await customerService.get();
            setCustomers(content);
            setLoading(false);
        } catch (error) {
            errorCatcher(error);
        }
    }

    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
    }

    useEffect(() => {
        if (error !== null) {
            toast(error);
            setError(null);
        }
    }, [error]);

    return (
        <CustomerContext.Provider value={{ customers }}>
            {!isLoading ? children : <Loader />}
        </CustomerContext.Provider>
    );
};

CustomerProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default CustomerProvider;
