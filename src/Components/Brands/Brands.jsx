import React from "react";
import "./Brands.scss";
import Navbar from "../Header/Navbar/Navbar";
import Icon from "../images/z.png";
import { brands } from "../Api";
const Brands = () => {
  return (
    <div className="brands">
      <div className="brands__block">
        {brands.map((brand) => {
          return (
            <>
              <img key={brand.id} src={brand.img} className="brands__brand" alt="" />
              <div className="katak"></div>
            </>
          );
        })}
      </div>
      <div className="brands__navbar">
        <img src={Icon} alt="Img" />
        <Navbar />
      </div>
    </div>
  );
};

export default Brands;
