import React from "react";
import TeslaLogo from "../assets/TeslaLogo.png";
import "./Header.css";
import TeslaLogoSmall from "../assets/TeslaLogoSmall.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header_logo">
        <img src={TeslaLogoSmall} alt="Tesla_logo"></img>
      </div>
      <div className="header_center">
        <p>Model S</p>
        <p>Model 3</p>
        <p>Model X</p>
        <p>Model Y</p>
        <p>Solar Roof</p>
        <p>Solar Panel</p>
      </div>

      <div className="header_right">
        <p>Shop</p>
        <p>Tesla Account</p>
      </div>
    </div>
  );
};

export default Header;
