import React from "react";
import classnames from "classnames";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../../../../store/thunk/todos/deleteTodo";
import { changeActivePost } from "../../../../../store/thunk/todos/changeActiveTodo";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import { Button } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useStyles } from "../../../general/styles/btn.styles";
import {useStylesCheckBox } from "../../../general/styles/checkBox.styles";
import { useStylesIcon } from "../../../general/styles/icon.styles";
import "./Todo.css";


export const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const listId = id;
  const classes = useStyles();
  const checkbox = useStylesCheckBox()
  const icons = useStylesIcon()

  return (
    <div className="todo">
      <Checkbox
        size="small"
        className={checkbox.checkBox}
        variant="contained"
        color="default"
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
      <Button
        className={classes.btnWrapper}
        onClick={() => dispatch({ type: "IS_EDITOR", editData: todo })}
      >
        <CreateOutlinedIcon className={icons.icon} />
      </Button>
      <Button
        className={classes.btnWrapper}
        onClick={() => dispatch(deleteTodo(todo._id, listId))}
      >
        <DeleteOutlineIcon className={icons.icon} />
      </Button>
    </div>
  );
};
