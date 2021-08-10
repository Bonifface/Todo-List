import React from "react";
import "./User.css"

export const User = ({user}) => {
  return(
      <div className="userName">{user.name}</div>
  )
}