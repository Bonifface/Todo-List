import React, { useState } from "react";
import { useSelector } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Todo } from "../TodoList/Todo/Todo";
import { FormInput } from "../TodoList/Form/Form";

const reorder = (list, fromIndex, toIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(fromIndex, 1);
  result.splice(toIndex, 0, removed);
  return result;
};
console.log(1)

export const LettersApp = () => {
  const todo = useSelector((state) => state.todoss);
  console.log(todo);

  const [letters, setLetters] = useState(todo);

  function onDragEnd(result) {
    if (!result.destination) return;

    const fromIndex = result.source.index;
    const toIndex = result.destination.index;

    if (fromIndex === toIndex) return;

    setLetters(reorder(letters, fromIndex, toIndex));
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <div className="Todo-wrapper">
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <FormInput />
              {letters.map((todo, index) => (
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
  );
};
