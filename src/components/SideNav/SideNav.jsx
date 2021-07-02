import React from "react";
import { useSelector } from "react-redux";
import "./sideNav.css";
import classnames from "classnames";
import { Link } from "react-router-dom";

export const SideNav = () => {
  const menuAct = useSelector((state) => state.menuAct);

  return (
    <div
      className={classnames("SideNav-wrapper", {
        SideNavWrapperA: menuAct,
      })}
    >
      <div className="SideText">
        <div>
          <Link to="/todo-lists" className="SideLink1">Todo List</Link>
        </div>
        <div>
          <Link to="/users"  className="SideLink2">Users</Link>
        </div>
      </div>
    </div>
  );
};
