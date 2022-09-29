import React from "react";
import "./MainLayout.css";
import { Outlet } from "react-router-dom";
import BreadcrumbsComponent from "../../components/BreadcrumbsComponent/BreadcrumbsComponent";

const MainLayout = () => {
    return (
        <div className="MainLayout">
            <header className="MainLayout__header">Header</header>
            <main className="MainLayout__main">
                <div className="MainLayout__container container">
                    <BreadcrumbsComponent />
                    <Outlet />
                </div>
            </main>
            <footer className="MainLayout__footer">Footer</footer>
        </div>
    )
}

export default MainLayout;