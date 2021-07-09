import React, { useEffect } from "react";
import classnames from "classnames";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../../store/thunk/todos/deleteTodo";
import { changeActivePost } from "../../../store/thunk/todos/changeActiveTodo";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import CreateIcon from "@material-ui/icons/Create";
import { useParams } from "react-router-dom";

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const listId = id;

  return (
    <div className="todo">
      <Checkbox
        variant="contained"
        color="primary"
        checked={!todo.active}
        onClick={() => dispatch(changeActivePost(todo))}
      />
      <span
        className={classnames("todoText", {
          inactiveTodo: !todo.active,
        })}
      >
        {todo.text}
      </span>
      <button
        className="buttons"
        onClick={() => dispatch({ type: "IS_EDITOR", editData: todo })}
      >
        <CreateIcon color="action" />
      </button>
      <button
        className="buttons"
        onClick={() => dispatch(deleteTodo(todo._id, listId))}
      >
        <DeleteOutlineIcon color="action" fontSize="large" />
      </button>
    </div>
  );
};
