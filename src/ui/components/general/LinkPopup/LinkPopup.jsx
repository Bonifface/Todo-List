import React from "react";
import "./LinkPopup.css";
import { Button } from "@material-ui/core";
import { useStyles } from "../styles/btn.styles";
import BeenhereOutlinedIcon from "@material-ui/icons/BeenhereOutlined";
import { Link } from "react-router-dom";
import { useStylesIcon } from "../styles/icon.styles";
import { useDispatch } from "react-redux";
import { cleanMessageAction } from "../../../../store/rootReducer";

export const LinkPopup = ({ message }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const icons = useStylesIcon();

  return (
    <div className="loginBackground">
      <div className="LinkPopupContainer">
        <div className="messageWrapper">
          <BeenhereOutlinedIcon className={icons.iconSuccess} />
          <div className="Message">{message}</div>
        </div>

        <div className="linkPopupMessage">
          <Link to={"/login"} className="linkButPopup">
            <Button
              onClick={() => dispatch(cleanMessageAction([]))}
              className={classes.btnWrapper}
            >
              Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
