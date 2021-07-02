import { addTodo } from "./actions/todos/addTodo";
import { deleteTodo } from "./actions/todos/deleteTodo";
import { changeActive } from "./actions/todos/changeActive";
import { setTodos } from "./actions/todos/setTodos";
import { menuActive } from "./actions/headerMenu/menuActive";
import { setTodoLists } from "./actions/todoLists/setTodoLists";
import { isLoading } from "./actions/general/isLoading";
import { isEditor } from "./actions/todos/isEditor";
import { editTodoText } from "./actions/todos/editTodoText";
import { createList } from "./actions/todoLists/createList";
import { deleteList } from "./actions/todoLists/deleteList";
import { createMod } from "./actions/general/createMod";
import { confirmed } from "./actions/general/confirmed";
import { updateList } from "./actions/todoLists/updateList";

const initialState = {
  menuAct: true,
  users: [
    {
      name: "Tom",
      id: 1,
    },
  ],
  todos: [],
  todoss: [
    {
      _id: "60b90f1c2aaa033808a0653e",
      text: "dadasdasdasda",
      active: false,
    },
    {
      _id: "60b90f1c2aaa033808a0653a",
      text: "1234asd",
      active: true,
    },
    {
      _id: "60b90f1c2aaa033808a06532",
      text: "1234asddasdaszxc",
      active: true,
    },
    {
      _id: "60b90f1c2aaa033808a06533",
      text: "1234asdasdasda",
      active: true,
    },
  ],
  todoLists: [],
  loading: true,
  confirmed: false,
  inEditMod: false,
  createMod: false,
  editData: {},
};

const ADD_TODO = "ADD_TODO";
const SET_TODOS = "SET_TODOS";
const DELETE_TODO = "DELETE_TODO";
const CHANGE_ACTIVE = "CHANGE_ACTIVE";
const MENU_ACTIVE = "MENU_ACTIVE";
const SET_TODO_LISTS = "SET_TODO_LISTS";
const IS_LOADING = "IS_LOADING";
const IS_EDITOR = "IS_EDITOR";
const CREAT_MOD = "CREAT_MOD";
const EDIT_TODO_TEXT = "EDIT_TODO_TEXT";
const ADD_LIST = "ADD_LIST";
const DELETE_LIST = "DELETE_LIST";
const CONFIRMED = "CONFIRMED";
const UPDATE_LIST = "UPDATE_LIST";

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return addTodo(state, action);
    case DELETE_TODO:
      return deleteTodo(state, action);
    case CHANGE_ACTIVE:
      return changeActive(state, action);
    case SET_TODOS:
      return setTodos(state, action);
    case MENU_ACTIVE:
      return menuActive(state, action);
    case SET_TODO_LISTS:
      return setTodoLists(state, action);
    case IS_LOADING:
      return isLoading(state, action);
    case IS_EDITOR:
      return isEditor(state, action);
    case EDIT_TODO_TEXT:
      return editTodoText(state, action);
    case ADD_LIST:
      return createList(state, action);
    case DELETE_LIST:
      return deleteList(state, action);
    case CREAT_MOD:
      return createMod(state, action);
    case CONFIRMED:
      return confirmed(state, action);
    case UPDATE_LIST:
      return updateList(state, action);
    default:
      return state;
  }
};

export const addTodoAction = (payload) => {
  return { type: ADD_TODO, payload };
};
export const deleteTodoAction = (payload) => {
  return { type: DELETE_TODO, payload };
};
export const changeActiveAction = (payload) => {
  return { type: CHANGE_ACTIVE, payload };
};
export const setTodoAction = (payload) => {
  return { type: SET_TODOS, payload };
};
export const setTodoListsAction = (payload) => {
  return { type: SET_TODO_LISTS, payload };
};
export const setLoading = (payload) => {
  return { type: IS_LOADING, payload };
};
export const updateTodoTextAction = (payload) => {
  return { type: EDIT_TODO_TEXT, payload };
};
export const addListAction = (payload) => {
  return { type: ADD_LIST, payload };
};
export const deleteListAction = (payload) => {
  return { type: DELETE_LIST, payload };
};
export const updateListAction = (payload) => {
  return { type: UPDATE_LIST, payload };
};
