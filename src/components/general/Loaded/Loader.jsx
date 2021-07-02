import React from "react";
import "./Loader.css";
import { css } from "@emotion/core";
import ScaleLoader from "react-spinners/ScaleLoader";

export const Loader = () => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    height: 1000px;
  `;

  return (
    <div className="loading">
      <ScaleLoader css={override} size={70} />
    </div>
  );
};
