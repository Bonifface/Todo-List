import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import './Form.css'
import { addTodo } from "../../../store/thunk/todos/addTodo";
import { useParams } from "react-router-dom";

const schema = yup.object().shape({
  inputText: yup
    .string("Enter your task")
    .min(3, "Too short")
    .max(200, "Too long")
    .required("Empty"),
});

export const FormInput = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const formik = useFormik({
    initialValues: {
      inputText: "",
    },
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      dispatch(addTodo(values.inputText, id))
      resetForm({ inputText: "" });
    },
  });

  const { values, handleChange, handleSubmit } = formik;
  return (
    <div className="FormInput">
      <form className="formTodo">
        <input
          className="input brd-grad"
          name="inputText"
          placeholder="new task"
          onChange={handleChange}
          value={values.inputText}
        />
        <button
          type="submit"
          className="glow-on-hover"
          onClick={handleSubmit}
        >
          Add
        </button>
      </form>
      <div className='errors-wrapper'>
        <div className="errors">
          {formik.touched.inputText && formik.errors.inputText}
        </div>
      </div>
    </div>
  );
};
