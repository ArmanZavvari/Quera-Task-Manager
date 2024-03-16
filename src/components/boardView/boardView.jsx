import { useState, useEffect } from "react";
import icons from "../../utils/icons/icons";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Card from "../task/task";
import config from "../../config.json";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDarkMode } from "../common/darkmode/DarkModeContext";

function BoardView() {
  const { wid, pid } = useParams();
  const [borads, setBorads] = useState([]);
  const [state, setState] = useState([]);

  const { darkMode } = useDarkMode();

  useEffect(() => {
    const accessToken = localStorage.getItem("access");

    axios
      .get(config.apiUrl + `/workspaces/${wid}/projects/${pid}/boards/`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        setBorads(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [wid, pid]);

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
        <Droppable droppableId="0">
          {(provided) =>
            borads.map((board) => {
              return (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="flex flex-col items-center"
                >
                  <div
                    className={`flex items-center justify-between w-[250px] h-[40px] font-bold  border border-t-[3px] rounded-2xl border-t-[#FD7E14] border-[#D2D6DC] my-4 px-2 ${
                      darkMode
                        ? "border-t-black bg-stone-500 text-white"
                        : "border-t-[#FD7E14] border-[#D2D6DC]"
                    } `}
                  >
                    <p>{board.name}</p>
                    <div className="flex items-center">
                      {icons.dots("#323232", "24px")}
                      {icons.plus("#323232", "24px")}
                    </div>
                  </div>
                  {board.tasks.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <Card {...item} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              );
            })
          }
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default BoardView;
