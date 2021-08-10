import React from "react";
import { Link } from "react-router-dom";
import "./List.css";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useStyles } from "../../../general/styles/btn.styles";

export const List = ({ list }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <div className="item">
      <div className="todoName">{list.name}</div>
      <div className="todoContent">{list.description}</div>
      <Link to={`/todo-list/${list._id}`} className="TodoListLink">
        <Button className={classes.btnOpen}>Open</Button>
      </Link>
      <div className="ListButtons">
        <Button
          color="secondary"
          onClick={() => dispatch({ type: "CONFIRMED", editData: list._id })}
        >
          del
        </Button>
        <Button
          // className={classes.btnOpen}
          color="primary"
          onClick={() => dispatch({ type: "IS_EDITOR", editData: list })}
        >
          edit
        </Button>
      </div>
    </div>
  );
};
