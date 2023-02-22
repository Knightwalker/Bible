// Libs
import { Link, Outlet } from "react-router-dom";
import "./AuthLayout.css";

// Components
import CgNavLink from "../../../../../components/CgNavLink/CgNavLink";
import CgNavDropdown from "../../../../../components/CgNavDropdown/CgNavDropdown";

const AuthLayout = () => {
    return (
        <div className="AuthLayout">
            <header className="AuthLayout__header">
                <nav className="AuthLayout__nav container font-inter-medium">
                    <div className="AuthLayout__nav-item1">
                        <Link to="/" id="home" className="AuthLayout__nav-logo-btn user-select-none">codegigas</Link>
                    </div>
                    <div className="AuthLayout__nav-item2">
                        <CgNavLink label={"Docs"} href={"/docs"} />
                        <CgNavLink label={"Paths"} href={"/paths"} />
                        <CgNavLink label={"About us"} href={"about-us"}/>
                    </div>
                    <div className="AuthLayout__nav-item3">
                        <CgNavDropdown label={"Account"} />
                    </div>
                </nav>
            </header>
            <div className="AuthLayout__container container">
                <main className="AuthLayout__main">
                    <Outlet />
                </main>
            </div>
            <footer className="AuthLayout__footer">Footer</footer>
        </div>
    )
}

export default AuthLayout;