import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import { listSchema } from "../CreateList/CreateList";
import { updateList } from "../../../../../store/thunk/todoLists/udateList";
import "./ListEditor.css";
import { Button } from "@material-ui/core";

export const ListEditor = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.editData);

  const formik = useFormik({
    initialValues: {
      listName: list.name,
      description: list.description,
    },
    validationSchema: listSchema,
    onSubmit: (values) => {
      dispatch(updateList(list, values.listName, values.description));
    },
  });
  const { values, handleChange, handleSubmit } = formik;

  return (
    <div className="E-listWrapper">
      <div className="E-listContainer">
        <div className="E-listGlobalTitle">
          <div>List editor</div>
        </div>
        <div className="E-listName">
          <div className="E-listTitle">Change name</div>
          <textarea
            name="listName"
            className="E-listTextarea"
            onChange={handleChange}
            value={values.listName}
          />
        </div>
        <div className="E-listDesc">
          <div className="E-listTitle">Change descriptions</div>
          <textarea
            name="description"
            onChange={handleChange}
            className="E-listTextarea"
            value={values.description}
          />
        </div>

        <div className="E-listButtons">
          <Button color="primary" onClick={() => handleSubmit()}>
            save
          </Button>
          <Button
            color="secondary"
            onClick={() => dispatch({ type: "IS_EDITOR", inEditMod: true })}
          >
            exit
          </Button>
        </div>
        <div className="errors">
          {(formik.touched.listName && formik.errors.listName) ||
            (formik.touched.description && formik.errors.description)}
        </div>
      </div>
    </div>
  );
};
