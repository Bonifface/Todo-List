import "./Login.css";
import * as yup from "yup";
import { useFormik } from "formik";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonIcon from "@material-ui/icons/Person";
import { Button } from "@material-ui/core";
import { useStyles } from "../general/styles/btn.styles";
import { TextField } from "../general/textField/textField";
import React from "react";
import { Link } from "react-router-dom";
import { useStylesIcon } from "../general/styles/icon.styles";

export const loginSchema = yup.object().shape({
  userName: yup.string().required("Empty user name"),
  password: yup.string().required("Empty password"),
});

export const Login = () => {
  const classes = useStyles();
  const iconMane = useStylesIcon();

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: () => {},
  });

  const { values, handleChange, handleSubmit, touched, errors } = formik;

  return (
    <div className="loginBackground">
      <div className="loginWrapper">
        <div className="loginContainer">
          <div className="circle">
            <div className="userLogo">
              <PersonIcon className={iconMane.iconMane} />
            </div>
          </div>
          <div className="login-text">Login</div>

          <TextField
            placeholder="User Name"
            name="userName"
            handleChange={handleChange}
            value={values.userName}
            error={touched.userName && errors.userName}
            icon={<AccountCircleIcon className="smallIcon" />}
          />
          <TextField
            placeholder="Password"
            name="password"
            handleChange={handleChange}
            value={values.password}
            error={touched.password && errors.password}
            icon={<LockOutlinedIcon className="smallIcon" />}
          />

          <div>
            <Button onClick={handleSubmit} className={classes.btn}>
              Submit
            </Button>
          </div>
          <div>
            <Link to="/signUp" className="linkBut">
              <Button className={classes.btnIfAccount}>Sign up</Button>
            </Link>
          </div>

          {/*<div className="input-field">*/}
          {/*  <div className="forgotPassword">Forgot the password?</div>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
};
