import React from "react";
import Logo from "../assets/TL-Logo.svg"
import './Header.css'

const Header = () => {
    return (
        <div className="header" >
            <div className=""><img src={Logo} alt="TL Logo" /></div>
       
            <div className="sign">Sign in</div>
        </div>
    );
}

export default Header;