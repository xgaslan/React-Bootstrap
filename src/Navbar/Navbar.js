import React from "react";
import {SidebarData} from "./NavbarData";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5 fixed">
            <div className="container">
                <a href="#" className="navbar-brand">
                    Bootstrap
                </a>
                <button
                    className="navbar-toggler"
                    data-target="#navbarCollapse"
                    data-toggle="collapse"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        {SidebarData.map((item, index) => {
                            return (
                                <div>
                                    <li key={index} className={item.className}>
                                        <a
                                            href={item.path}
                                            className="nav-link"
                                        >
                                            <span className="text-white">
                                                {item.title}
                                            </span>
                                        </a>
                                    </li>
                                </div>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
