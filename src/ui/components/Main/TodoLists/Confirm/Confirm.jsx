import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { deleteTodoList } from "../../../../../store/thunk/todoLists/deleteList";
import "./Confirm.css";

export const Confirm = () => {
  const dispatch = useDispatch();
  const listId = useSelector((state) => state.editData);
  return (
    <div className="confirmWrapper">
      <div className="confirm">
        <h1 className="delete-massage">Delete todolist?</h1>
        <div className="confirmBtn">
          <Button
            color="secondary"
            onClick={() => dispatch(deleteTodoList(listId))}
          >
            Delete
          </Button>
          <Button
            color="primary"
            onClick={() => dispatch({ type: "CONFIRMED", confirmed: true })}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};
