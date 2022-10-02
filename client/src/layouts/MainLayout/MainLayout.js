import React from "react";
import "./MainLayout.css";
import { Link, Outlet } from "react-router-dom";
import BreadcrumbsComponent from "../../components/BreadcrumbsComponent/BreadcrumbsComponent";

const MainLayout = () => {
    return (
        <div className="MainLayout">
            <header className="MainLayout__header">
                <nav className="MainLayout__nav container font-inter-medium">
                    <div className="MainLayout__nav-item1">
                        <Link to="/" id="home" className="MainLayout__nav-logo-btn user-select-none">codegigas</Link>
                    </div>
                    <div className="MainLayout__nav-item2">
                        <Link to="/docs" className="MainLayout__nav-normal-btn user-select-none">Docs</Link>
                        <Link to="/paths" className="MainLayout__nav-normal-btn user-select-none">Paths</Link>
                        <Link to="/about-us" className="MainLayout__nav-normal-btn user-select-none">About us</Link>
                    </div>
                    <div className="MainLayout__nav-item3">
                        <Link to="/account" className="MainLayout__nav-account-btn user-select-none">My Account<span className="MainLayout__nav-account-btn-arrow">&#x25BD;</span></Link>
                    </div>
                </nav>
            </header>
            <div className="MainLayout__container container">
                <BreadcrumbsComponent />
                <div className="MainLayout__container-header"></div>
                <main className="MainLayout__main">
                    <Outlet />
                </main>
                <div className="MainLayout__container-footer"></div>
            </div>
            <footer className="MainLayout__footer">Footer</footer>
        </div>
    )
}

export default MainLayout;