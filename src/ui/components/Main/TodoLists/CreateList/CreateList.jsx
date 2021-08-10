import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { createTodoList } from "../../../../../store/thunk/todoLists/createList";
import { useStyles } from "../../../general/styles/btn.styles";
import * as yup from "yup";
import { Button } from "@material-ui/core";
import "./CreateList.css";

export const listSchema = yup.object().shape({
  listName: yup
    .string("Enter your task")
    .max(30, "Too long name")
    .required("Empty name"),
  descriptions: yup.string("Enter your task").max(60, "Too long descriptions"),
});

export const CreateList = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { values, handleChange, handleSubmit, touched, errors } = useFormik({
    initialValues: {
      listName: "",
      descriptions: "",
    },
    validationSchema: listSchema,
    onSubmit: (values) => {
      dispatch(createTodoList(values.listName, values.descriptions));
    },
  });

  return (
    <div className="list-wrapper">
      <div className="list-container">
        <div className="listName">
          <h2 className="list-title">1. How do you call list?</h2>
          <textarea
            onChange={handleChange}
            value={values.listName}
            name="listName"
            className="textArea"
          />
        </div>
        <div >
          <h2 className="list-title">2. Maybe you have descriptions?</h2>
          <textarea
            onChange={handleChange}
            value={values.descriptions}
            name="descriptions"
            className="textArea"
          />
        </div>
        <div className="list-buttons">
          <Button
            color="primary"
            size="large"
            // type="submit"
            onClick={handleSubmit}
          >
            save
          </Button>
          <Button
            size="large"
            color="secondary"
            onClick={() => dispatch({ type: "CREAT_MOD", createMod: true })}
          >
            exit
          </Button>
        </div>
        <div className="errors">
          {(touched.listName && errors.listName) ||
            (touched.descriptions && errors.descriptions)}
        </div>
      </div>
    </div>
  );
};
