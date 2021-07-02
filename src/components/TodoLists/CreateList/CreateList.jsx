import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { createTodoList } from "../../../store/thunk/todoLists/createList";
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

  const formik = useFormik({
    initialValues: {
      listName: "",
      descriptions: "",
    },
    validationSchema: listSchema,
    onSubmit: (values) => {
      dispatch(createTodoList(values.listName, values.descriptions));
    },
  });
  const { values, handleChange, handleSubmit } = formik;

  return (
      <div className="list-wrapper">
        <div className="list-container">
          <h1 className="CreateList">Create new list</h1>
          <div className="listName">
            <h2 className="list-title">1. How do you call list?</h2>
            <textarea
              onChange={handleChange}
              value={values.listName}
              name="listName"
              className="textarea"
            />
          </div>
          <div className="list-description">
            <h2 className="list-descriptions">
              2. Maybe you have descriptions?
            </h2>
            <textarea
              onChange={handleChange}
              value={values.descriptions}
              name="descriptions"
              className="textarea"
            />
          </div>
          <div className="list-buttons">
            <Button type="submit" color="primary" onClick={handleSubmit}>
              save
            </Button>
            <Button
              color="secondary"
              onClick={() => dispatch({ type: "CREAT_MOD", createMod: true })}
            >
              exit
            </Button>
          </div>
          <div className="errors">
            {(formik.touched.listName && formik.errors.listName) ||
              (formik.touched.descriptions && formik.errors.descriptions)}
          </div>
        </div>
      </div>
  );
};
