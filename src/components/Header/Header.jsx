import React from "react";
import { useDispatch} from 'react-redux'
import "./Header.css";

export const Header = () => {
  const dispatch = useDispatch()

  return (
    <header>
      <div className="menu" onClick={() => dispatch({type:'MENU_ACTIVE'})}>
        &#9776;
      </div>
      <div className="logo-wrapper">
        <img
          alt="#"
          className="company-logo"
          src="../img/Akatsuki-Logo-PNG-Pic.png"
        />
        <h1 className="logo-name">Dark cloud</h1>

      </div>
      <img
        alt="#"
        className="profile-logo"
        src="../img/2dfdbc1c60e39274bbdd04908f07de44.jpg"
      />
    </header>
  );
};
