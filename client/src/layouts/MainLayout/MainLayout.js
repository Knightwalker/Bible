// Libs
import React from "react";
import "./MainLayout.css";
import { Link, Outlet } from "react-router-dom";

// Components
import BreadcrumbsComponent from "../../components/BreadcrumbsComponent/BreadcrumbsComponent";
import CgNavLink from "../../components/CgNavLink/CgNavLink";

const MainLayout = () => {
    return (
        <div className="MainLayout">
            <header className="MainLayout__header">
                <nav className="MainLayout__nav container font-inter-medium">
                    <div className="MainLayout__nav-item1">
                        <Link to="/" id="home" className="MainLayout__nav-logo-btn user-select-none">codegigas</Link>
                    </div>
                    <div className="MainLayout__nav-item2">
                        <CgNavLink label={"Docs"} />
                        <CgNavLink label={"Paths"} />
                        <CgNavLink label={"About us"} />
                    </div>
                    <div className="MainLayout__nav-item3">
                        <div className="MainLayout__dropdown-btn">
                            <div className="MainLayout__nav-account-btn user-select-none">My Account <span className="MainLayout__nav-account-btn-arrow">&#x25BD;</span></div>
                            <div className="MainLayout__nav-account-dropdown-menu-wrapper">
                                <div className="MainLayout__nav-account-dropdown-menu-underline"></div>
                                <div className="MainLayout__nav-account-dropdown-menu">
                                    <div>d</div>
                                    <div>d</div>
                                </div>
                            </div>
                        </div>
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