import React from "react";
import "./Header.scss";
import Navbar from "./Navbar/Navbar";

import Icon from '../images/h1.png'
import Heart from '../images/h2.png'
const Header = () => {
  return (
    <div className="header">
        <div className="icon">
            <img src={Icon} alt="" />

            <h3>Architecture <font>Made With</font><img src={Heart} alt="" /></h3>
        </div>
      <Navbar />
    </div>
  );
};

export default Header;
