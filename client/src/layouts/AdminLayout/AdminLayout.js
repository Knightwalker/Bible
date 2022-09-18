import React from "react";
import "./AdminLayout.css";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {

    return (
        <div className="AdminLayout">
            <header className="AdminLayout__header">Admin Header</header>
            <main className="AdminLayout__main">
                <Outlet />
            </main>
            <footer className="AdminLayout__footer">Admin Footer</footer>
        </div>
    )
}

export default AdminLayout;