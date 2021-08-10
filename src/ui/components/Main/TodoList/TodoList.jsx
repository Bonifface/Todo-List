import { Todo } from "./Todo/Todo";
import { FormInput } from "./Form/Form";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { getAllTodos } from "../../../../store/thunk/todos/getAllTodos";
import { useParams } from "react-router-dom";
import { Loader } from "../../general/Loaded/Loader";
import { TextEditor } from "./textEditor/textEditor";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { reorderTodo } from "../../../../store/thunk/todos/reorderTodo";

export const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const loading = useSelector((state) => state.loading);
  const inEditMod = useSelector((state) => state.inEditMod);
  const { id } = useParams();

  const onDragEnd = (result) => {
    console.log(result);
    if (!result.destination) return;

    const fromIndex = result.source.index;
    const toIndex = result.destination.index;

    if (fromIndex === toIndex) return;

    dispatch(reorderTodo(id, todos, fromIndex, toIndex));
  };

  useEffect(() => {
    dispatch(getAllTodos(id));
  }, []);

  if (loading) return <Loader />;
  return (
    <DragDropContext onDragEnd={onDragEnd}>

      <Droppable droppableId="list">

        {(provided) => (

          <div className="Todo-wrapper">
            {inEditMod && <TextEditor />}
            <div ref={provided.innerRef} {...provided.droppableProps}>

              <div className="TodoDesk">
                <FormInput />
                {todos.map((todo, index) => (
                  <Draggable
                    key={todo._id}
                    draggableId={todo._id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Todo
                          key={todo._id}
                          todo={todo}
                          index={todo.position}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
