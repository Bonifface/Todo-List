import React from "react";
import { Link } from "react-router-dom";
import "./List.css";
import { Button } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { green } from "@material-ui/core/colors";

const listTheme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
});

export const List = ({ list }) => {
  const dispatch = useDispatch();

  return (
    <div className="item">
      <div className="todoName">{list.name}</div>
      <div className="todoContent">{list.description}</div>
      <Link to={`/todo-list/${list._id}`} className="TodoListLink">
        <ThemeProvider theme={listTheme}>
          <Button size="large" color="primary">
            Open
          </Button>
        </ThemeProvider>
      </Link>
      <div className="ListButtons">
        <Button
          color="secondary"
          onClick={() => dispatch({ type: "CONFIRMED", editData: list._id })}
        >
          del
        </Button>
        <Button color="primary" onClick={() => dispatch({type: "IS_EDITOR", editData: list})}>edit</Button>
      </div>
    </div>
  );
};
