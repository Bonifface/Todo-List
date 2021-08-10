import React from "react";
import { useSelector } from "react-redux";
import { User } from "./User/User";
import "./Users.css"

export const Users = () => {
  const users = useSelector((state) => state.users);
  return (
    <div className="usersWrapper">
      <div className="usersList">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};
