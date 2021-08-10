import { Route, Switch } from "react-router-dom";
import { Dashboard } from "./Dashboard/Dashboard";
import { TodoLists } from "./TodoLists/TodoLists";
import { Users } from "./Users/Users";
import { TodoList } from "./TodoList/TodoList";
import React from "react";
import { Header } from "./Header/Header";
import { SideNav } from "./SideNav/SideNav";

export const Main = () => {
  return (
    <div>
      <Header />
      <SideNav />
      <div className="AppContent">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/todo-lists" component={TodoLists} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/todo-list/:id" component={TodoList} />
        </Switch>
      </div>
    </div>
  );
};
