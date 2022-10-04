import React from "react";
import { Link } from "react-router-dom";
import "./CgNavLink.css";

const CgNavLink = ({ label }) => {
    return (
        <div className="CgNavLink user-select-none">
            <Link to="/docs">{label}</Link>
        </div>
    );
};

export default CgNavLink;