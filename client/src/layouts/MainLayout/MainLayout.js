import React from "react";
import "./MainLayout.css";
import { Outlet } from "react-router-dom";

const MainLayout = () => {

    return (
        <div className="MainLayout">
            <header className="MainLayout__header">Header</header>
            <main className="MainLayout__main">
                <Outlet />
            </main>
            <footer className="MainLayout__footer">Footer</footer>
        </div>
    )
}

export default MainLayout;