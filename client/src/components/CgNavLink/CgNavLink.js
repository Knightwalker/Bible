import React from "react";
import { Link } from "react-router-dom";
import "./CgNavLink.css";

const CgNavLink = ({ label, href }) => {
    return (
        <div className="CgNavLink user-select-none">
            <Link to={href}>{label}</Link>
        </div>
    );
};

export default CgNavLink;