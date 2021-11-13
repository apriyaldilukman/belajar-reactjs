import React, {useState} from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Link} from "react-router-dom";
import {SideBarDataComp} from "./SideBarDataComp";
import "./NavbarComp.css";

const NavbarComp = () => {
    const [sidebar, setSidebar] = useState (false);
    const showSidebar = () => setSidebar (!sidebar);

    return (
        <> 
            <div className="navbar">
                <link to="#" className="menu-bars">
                    < FaIcons.FaBars OnClick={showSidebar} />
                </link>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                        <AiIcons.AiOutlineClose />
                        </Link>
                    </li>

                    {SideBarDataComp.map((item, index) =>{
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}

export default NavbarComp;