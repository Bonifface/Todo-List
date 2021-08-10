import React from "react";
import { TextField } from "../general/textField/textField";
import { Button } from "@material-ui/core";
import { useStyles } from "../general/styles/btn.styles";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EmailIcon from "@material-ui/icons/Email";
import "./SignUp.css";
import "../Login/Login.css";
import PersonIcon from "@material-ui/icons/Person";
import { useStylesIcon } from "../general/styles/icon.styles";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../../store/thunk/signUp/createUser";
import * as yup from "yup";
import { LinkPopup } from "../general/LinkPopup/LinkPopup";
import RemoveCircleOutlinedIcon from "@material-ui/icons/RemoveCircleOutlined";
import ScaleLoader from "react-spinners/ScaleLoader";
import { cleanMessageAction } from "../../../store/rootReducer";

const iconWithMessage = (message) => {
  if (message.length > 0 && message !== "User successfully saved") {
    return (
      <div className="SignUpError">
        <RemoveCircleOutlinedIcon />
        {message}
      </div>
    );
  }
  return <></>;
};

const LoaderInButton = (loading, handleSubmit, classes) => {
  if (loading) {
    if (loading)
      return (
        <div className="loaderWrapper">
          <ScaleLoader />
        </div>
      );
  }
  return (
    <Button onClick={handleSubmit} className={classes.btnWrapper}>
      Create
    </Button>
  );
};

const schemaSignUp = yup.object().shape({
  inputName: yup.string().required("Name can't be empty"),
  inputEmail: yup
    .string()
    .email("Email not correct")
    .required("Email can't be empty"),
  inputPassword: yup
    .string()
    .min(4, "min 4 symbols")
    .max(24, "max 24 symbols")
    .required("Password can't be empty"),
});

export const SignUp = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const iconMane = useStylesIcon();
  const loading = useSelector((state) => state.loading);
  const message = useSelector((state) => state.message);

  const formik = useFormik({
    initialValues: {
      inputName: "Boniface",
      inputEmail: "Boniface@fsdfds.werre",
      inputPassword: "Boniface",
      // inputName: "",
      // inputEmail: "",
      // inputPassword: "",
    },
    validationSchema: schemaSignUp,
    onSubmit: (values, { resetForm }) => {
      dispatch(
        createUser(values.inputName, values.inputEmail, values.inputPassword)
      );
    },
  });

  const { values, handleChange, handleSubmit, touched, errors } = formik;
  if (message.length > 0 && message === "User successfully saved")
    return <LinkPopup message={message} />;
  return (
    <div className="loginBackground">
      <div className="signUpWrapper">
        <div className="signUpContainer">
          <div className="circle">
            <div className="userLogo">
              <PersonIcon className={iconMane.iconMane} />
            </div>
          </div>
          <div className="login-text">Sign up</div>
          <TextField
            placeholder="User Name"
            handleChange={handleChange}
            name={"inputName"}
            value={values.inputName}
            error={touched.inputName && errors.inputName}
            icon={<AccountCircleIcon className="smallIcon" />}
          />
          <TextField
            placeholder="E-mail"
            handleChange={handleChange}
            name={"inputEmail"}
            value={values.inputEmail}
            error={touched.inputEmail && errors.inputEmail}
            icon={<EmailIcon className="smallIcon" />}
          />
          <TextField
            placeholder="Password"
            handleChange={handleChange}
            name="inputPassword"
            value={values.inputPassword}
            error={touched.inputPassword && errors.inputPassword}
            icon={<LockOutlinedIcon className="smallIcon" />}
          />
          <div>{iconWithMessage(message)}</div>
          <div>{LoaderInButton(loading, handleSubmit, classes, message)}</div>

          <div>
            <Link to="/login" className="linkBut">
              <Button
                className={classes.btnIfAccount}
                onClick={() => dispatch(cleanMessageAction([]))}
              >
                If you have account - login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
