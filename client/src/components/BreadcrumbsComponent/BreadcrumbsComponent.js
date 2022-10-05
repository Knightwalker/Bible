import React, { useEffect } from "react";
import { useMatches } from "react-router-dom";
import "./BreadcrumbsComponent.css";

const BreadcrumbsComponent = () => {
    const matches = useMatches();
    const breadcrumbs = matches 
        // first get rid of any matches that don't have handle and crumb
        // .filter((match) => Boolean(match.handle?.breadcrumb))

    useEffect(() => {
        console.log(breadcrumbs)

    }, [breadcrumbs]);

    return (
        <div className="BreadcrumbsComponent">
            <p>Home &gt;</p>
        </div>
    )
}

export default BreadcrumbsComponent;