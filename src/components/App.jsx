import React from "react";
import { Switch, Route } from "react-router-dom";
import { TodoList } from "./TodoList/TodoList";
import { Header } from "./Header/Header";
import { SideNav } from "./SideNav/SideNav";
import { TodoLists } from "./TodoLists/TodoLists";
import { Users } from "./Users/Users";
import { Dashboard } from "./Dashboard/Dashboard";
import "./TodoList/TodoStyle.css";
import "../index.css";
import {LettersApp} from "./Dashboard/test";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <SideNav />
      <div className="AppContent">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/todo-lists" component={TodoLists} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/todo-list/:id" component={TodoList} />
          <Route exact path ="/LettersApp" component={LettersApp}/>
        </Switch>
      </div>
    </div>
  );
};
