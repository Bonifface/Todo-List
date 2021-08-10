import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import React from "react";

export const TextField = ({ placeholder, icon, handleChange, value, name, error }) => {
  // console.log(value);
  return (
    <div>
      <div className="input-field">
        {icon}
        <input
          name={name}
          onChange={handleChange}
          value={value}
          className="login-input"
          placeholder={placeholder}
        />
      </div>
      <div className="line" />
      <div className="error">{error}</div>
      {/*<div className="login-error">error</div>*/}
    </div>
  );
};
