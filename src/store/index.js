import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const _store =  {
  general: {},
  dashboard: {},
  todoLists: {
    lists: [{ id: 1, name: 'name'}],
  },
  todoList: {
    id: '1',
    todos: [],
  },
  users: {},
}