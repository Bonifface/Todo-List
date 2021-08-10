import React from "react";
import "./Loader.css";
import ScaleLoader from "react-spinners/ScaleLoader";

export const Loader = () => {


  return (
    <div className="loading">
      <ScaleLoader className="loader" size={70}/>
    </div>
  );
};
