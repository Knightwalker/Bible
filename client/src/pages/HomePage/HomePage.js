import React from "react";
import { Link } from "react-router-dom";
import { routesMap } from "../../router";
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="HomePage">
            <p>Go to <Link to={routesMap.DOCS_PAGE}>docs</Link></p>
        </div>
    )
}

export default HomePage;