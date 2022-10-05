import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CgNavDropdown.css";

const classNamesStates = {
    "CgNavDropdown__btn": {
        Default: ["CgNavDropdown__btn"],
        Hover: ["CgNavDropdown__btn", "hover"]
    },
    "CgNavDropdown__menu-wrapper": {
        Default: ["CgNavDropdown__menu-wrapper"],
        Visible: ["CgNavDropdown__menu-wrapper", "visible"]
    }
}

const CgNavDropdown = ({ label }) => {
    const [state, setState] = useState({
        classNames: {
            "CgNavDropdown__btn": classNamesStates["CgNavDropdown__btn"].Default,
            "CgNavDropdown__menu-wrapper": classNamesStates["CgNavDropdown__menu-wrapper"].Default
        }
    });

    const setStateForClassNames = (value) => {
        let newClassName = null;
        let newClassName2 = null;
        if (value === true) {
            newClassName = classNamesStates["CgNavDropdown__btn"].Hover;
            newClassName2 = classNamesStates["CgNavDropdown__menu-wrapper"].Visible;
        } else {
            newClassName = classNamesStates["CgNavDropdown__btn"].Default;
            newClassName2 = classNamesStates["CgNavDropdown__menu-wrapper"].Default;
        }

        setState((oldState) => {
            const newState = { ...oldState }
            newState.classNames["CgNavDropdown__btn"] = newClassName;
            newState.classNames["CgNavDropdown__menu-wrapper"] = newClassName2;
            return newState;
        });
    }

    return (
        <div className="CgNavDropdown user-select-none" 
            onMouseLeave={() => setStateForClassNames(false)}
        >
            <div className={state.classNames["CgNavDropdown__btn"].join(" ")}
                onMouseEnter={() => setStateForClassNames(true)}
            >
                <span>{label}</span>
                <span className="CgNavDropdown__btn-arrow">&#x25BD;</span>
            </div>
            <div className={state.classNames["CgNavDropdown__menu-wrapper"].join(" ")}>
                <div className="CgNavDropdown__menu-underline"></div>
                <div className="CgNavDropdown__menu">
                    <div className="CgNavDropdown__menu-btn">
                        <i className="bi bi-gear"></i>
                        <Link>Account Settings</Link>
                    </div>
                    <div className="CgNavDropdown__menu-btn">
                        <i className="bi bi-pencil-square"></i>
                        <Link>Register</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CgNavDropdown;