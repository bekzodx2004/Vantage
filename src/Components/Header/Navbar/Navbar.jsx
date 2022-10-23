import React from "react";
import Li from "./Li";
// import { useState } from 'react'

import { api } from "../../Api";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <ul>
      {api.map((link) => {
        return <Li key={link.id} text={link.text} />;
      })}
    </ul>
  );
};

export default Navbar;
