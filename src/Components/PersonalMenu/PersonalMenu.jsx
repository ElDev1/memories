import React from "react";
import Card from "../Card/Card";
import "./PersonalMenu.css";

const PersonalMenu = () => {
  return (
    <div className="container-menu">
      <h1 className="menuTitle">Your memories</h1>
      <div className="container-cards">
        <Card />
      </div>
    </div>
  );
};

export default PersonalMenu;
