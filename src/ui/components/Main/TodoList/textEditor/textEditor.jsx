import React from "react";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import "./textEditor.css";
import { Button } from "@material-ui/core";
import { useFormik } from "formik";
import { updateTodoText } from "../../../../../store/thunk/todos/updateTodoText";

const schema = yup.object().shape({
  inputText: yup
    .string("Enter your task")
    .min(3, "Too short")
    .max(200, "Too long")
    .required("Empty"),
});

export const TextEditor = () => {
  const todo = useSelector((state) => state.editData);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      inputText: todo.text,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(updateTodoText(todo, values.inputText))
    },
  });
  const { handleChange, handleSubmit, values } = formik;

  return (
    <>
      <div className="popup-wrapper" />
      <div className="popup">
        <h1 className="TextEditor">Edit Todo</h1>
        <textarea
          name="inputText"
          onChange={handleChange}
          className="textarea"
          value={values.inputText}
        />
        <div className="popupBtn">
          <Button color="primary" onClick={handleSubmit}>
            save
          </Button>
          <Button
            color="secondary"
            onClick={() => dispatch({ type: "IS_EDITOR" })}
          >
            close
          </Button>
        </div>
        <div className="errors-wrapper">
          <div className="errors">
            {formik.touched.inputText && formik.errors.inputText}
          </div>
        </div>
      </div>
    </>
  );
};
