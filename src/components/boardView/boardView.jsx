import React, { useState, useEffect } from "react";
import icons from "../../utils/icons/icons";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Card from "../task/task";
import ReactDOM from "react-dom";

function BoardView() {
  const [state, setState] = useState([
    getItems(3),
    getItems(1),
    getItems(1),
    getItems(1),
    getItems(1),
    getItems(1),
  ]);

  // useEffect(() => {
  //   const container = document.getElementById("root");
  //   ReactDOM.render(<BoardView />, container);
  // }, []);

  // fake data generator
  function getItems(count, offset = 0) {
    return Array.from({ length: count }, (_, k) => ({
      id: `item-${k + offset}-${new Date().getTime()}`,
      content: <Card />, // Render your Card component here instead of fake data
    }));
  }

  function reorder(list, startIndex, endIndex) {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  }

  function move(source, destination, droppableSource, droppableDestination) {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);
    destClone.splice(droppableDestination.index, 0, removed);
    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;
    return result;
  }

  function onDragEnd(result) {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    // Get source and destination column indices
    const sourceColumnIndex = +source.droppableId;
    const destinationColumnIndex = +destination.droppableId;

    // If the card is dropped in the same column and position
    if (
      sourceColumnIndex === destinationColumnIndex &&
      source.index === destination.index
    ) {
      return;
    }

    // Copy the state array
    const newState = [...state];

    // If the card is dropped within the same column
    if (sourceColumnIndex === destinationColumnIndex) {
      const items = reorder(
        state[sourceColumnIndex],
        source.index,
        destination.index
      );
      newState[sourceColumnIndex] = items;
    } else {
      // If the card is dropped in a different column
      const result = move(
        state[sourceColumnIndex],
        state[destinationColumnIndex],
        source,
        destination
      );
      newState[sourceColumnIndex] = result[sourceColumnIndex];
      newState[destinationColumnIndex] = result[destinationColumnIndex];
    }

    // Update the state
    setState(newState);
  }
  return (
    <div dir="rtl" className="flex gap-5">
      <DragDropContext onDragEnd={onDragEnd}>
        {/* First column - Open */}
        <Droppable droppableId="0">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex flex-col items-center"
            >
              <div className="flex items-center justify-between w-[250px] h-[40px] font-bold  border border-t-[3px] rounded-2xl border-t-[#FD7E14] border-[#D2D6DC] my-4 px-2">
                <p>Open</p>
                <div className="flex items-center">
                  {icons.dots("#323232", "24px")}
                  {icons.plus("#323232", "24px")}
                </div>
              </div>
              {/* Draggable Card for the first column */}
              {state[0].map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        {/* Second column - In Progress */}
        <Droppable droppableId="1">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex flex-col items-center"
            >
              <div className="flex items-center justify-between w-[250px] h-[40px] font-bold  border border-t-[3px] rounded-2xl border-t-[#4C6EF5] border-[#D2D6DC] my-4 px-2">
                <p>In Progress</p>
              </div>
              {/* Draggable Card for the second column */}
              {state[1].map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        {/* third column - Pending */}
        <Droppable droppableId="2">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex flex-col items-center"
            >
              <div className="flex items-center justify-between w-[250px] h-[40px] font-bold  border border-t-[3px] rounded-2xl border-t-[#FAB005] border-[#D2D6DC] my-4 px-2">
                <p>In Progress</p>
              </div>
              {/* Draggable Card for the third column */}
              {state[2].map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        {/* fourth column - To Do */}
        <Droppable droppableId="3">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex flex-col items-center"
            >
              <div className="flex items-center justify-between w-[250px] h-[40px] font-bold  border border-t-[3px] rounded-2xl border-t-[#FD7E14] border-[#D2D6DC] my-4 px-2">
                <p>To Do</p>
              </div>
              {/* Draggable Card for the fourth column */}
              {state[3].map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        {/* fifth column - Done */}
        <Droppable droppableId="4">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex flex-col items-center"
            >
              <div className="flex items-center justify-between w-[250px] h-[40px] font-bold  border border-t-[3px] rounded-2xl border-t-[#40C057] border-[#D2D6DC] my-4 px-2">
                <p>Done</p>
              </div>
              {/* Draggable Card for the fifth column */}
              {state[4].map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default BoardView;
