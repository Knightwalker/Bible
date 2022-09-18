import React from "react";
import { useNavigate } from "react-router-dom";
import { routesMap } from "../../router";
import './HomePage.css';

const HomePage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(routesMap.ADMIN_DOCS_CREATE);
    }

    return (
        <div className="HomePage">
            
            <button onClick={handleClick}>Create Docs</button>
        </div>
    )
}

export default HomePage;