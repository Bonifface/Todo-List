import React from "react";
import { Switch, Route } from "react-router-dom";
import { Main } from "./Main/Main";
import { Login } from "./Login/Login";
import "./TodoList/TodoStyle.css";
import "../index.css";

export const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path={["/", "/todo-lists", "/users", "/todo-list/:id"]}
          component={Main}
        />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
};
