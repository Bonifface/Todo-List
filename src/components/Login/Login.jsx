import "./Login.css";
import * as yup from "yup";
import { useFormik } from "formik";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonIcon from "@material-ui/icons/Person";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  iconMane: {
    fontSize: 80,
    padding: 10,
    color: "white",
  },
  btn: {
    fontSize: 14,
    margin: "18px",
    color: "white",
    "&:hover": {
      background: "slateblue",
    },
  },

  btn2: {
    fontSize: 15,
    margin: 15,
    color: "white",
    borderBottom: "1 solid white",
  },
});

export const loginSchema = yup.object().shape({
  userName: yup
    .string("Enter your user name")
    .max(18, "Too long name")
    .required("Empty user name"),
  password: yup
    .string("Enter your task")
    .min(4, "Too long password")
    .required("Empty password"),
});

export const Login = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: () => {},
  });

  return (
    <div className="loginBackground">
      <div className="loginWrapper">
        <div className="loginContainer">
          <div className="circle">
            <div className="userLogo">
              <PersonIcon className={classes.iconMane} />
            </div>
          </div>
          <div className="login-text">Login</div>
          <div>
            <div className="input-field">
              <AccountCircleIcon className="smallIcon" />
              <input className="login-input" placeholder="User name" />
            </div>
            <div className="line" />
            {/*<div className="login-error">error</div>*/}
          </div>

          <div>
            <div className="input-field">
              <LockOutlinedIcon className="smallIcon" />
              <input className="login-input" placeholder="Password" />
            </div>
            <div className="line" />
            {/*<div className="login-error">error</div>*/}
          </div>

          <div className="input-field">
            <Button className={classes.btn}>Continue</Button>
            <Button className={classes.btn}>Sign up</Button>
          </div>

          <div className="input-field">
            <div className="forgotPassword">Forgot the password?</div>
          </div>
        </div>
      </div>
    </div>
  );
};
