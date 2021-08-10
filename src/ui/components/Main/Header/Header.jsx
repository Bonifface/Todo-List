import React from "react";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="wrapper-Icon">
        <img
          alt="#"
          className="company-logo"
          src="../img/Akatsuki-Logo-PNG-Pic.png"
        />
      </div>
      <div className="logo-wrapper">
        <h1 className="logo-name">Dark cloud</h1>
      </div>
      <div className="profile-logo">
        <AccountCircleOutlinedIcon fontSize={"large"} />
      </div>
    </header>
  );
};
