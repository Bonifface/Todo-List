import React from "react";
import "./sideNav.css";
import { Link } from "react-router-dom";

export const SideNav = () => {
  return (
    <div className="SideNav-wrapper">
      <div className="SideText">
        <div>
          <Link to="/todo-lists" className="SideLink">
            Todo List
          </Link>
        </div>
        <div>
          <Link to="/users" className="SideLink">
            Users
          </Link>
        </div>
      </div>
    </div>
  );
};
