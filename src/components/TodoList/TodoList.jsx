import { Todo } from "./Todo/Todo";
import { FormInput } from "./Form/Form";
import { useSelector, useDispatch } from "react-redux";
import React, {useEffect, useState} from "react";
import { getAllTodos } from "../../store/thunk/todos/getAllTodos";
import { useParams } from "react-router-dom";
import { Loader } from "../general/Loaded/Loader";
import { PopupEditor } from "./PopupEditor/PopupEditor";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const reorder = (list, fromIndex, toIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(fromIndex, 1);
  result.splice(toIndex, 0, removed);
  return result;
};


export const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const loading = useSelector((state) => state.loading);
  const inEditMod = useSelector((state) => state.inEditMod);
  const { id } = useParams();

  const [letters, setLetters] = useState(todos);

  function onDragEnd(result) {
    if (!result.destination) return;

    const fromIndex = result.source.index;
    const toIndex = result.destination.index;

    if (fromIndex === toIndex) return;

    // setLetters(reorder(letters, fromIndex, toIndex));
  }

  useEffect(() => {
    dispatch(getAllTodos(id));
  }, []);
  if (loading) return <Loader />;
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {inEditMod && <PopupEditor />}
      <Droppable droppableId="list">

        {(provided) => (
          <div className="Todo-wrapper">
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <FormInput />
              {todos.map((todo, index) => (
                <Draggable key={todo._id} draggableId={todo._id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div className="TodoDesk">
                        <Todo key={todo._id} todo={todo} />
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
    // <div className="Todo-wrapper">
    //   {inEditMod && <PopupEditor />}
    //   <div className="TodoDesk">
    //     <FormInput />
    //     {todos.map((todo) => (
    //       <Todo key={todo._id} todo={todo} />
    //     ))}
    //   </div>
    // </div>
  );
};
