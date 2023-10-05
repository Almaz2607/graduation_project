import React from "react";
import { PropagateLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className="loader">
            <PropagateLoader color={"#c19057"} width={100} height={4} />
        </div>
    );
};

export default Loader;
