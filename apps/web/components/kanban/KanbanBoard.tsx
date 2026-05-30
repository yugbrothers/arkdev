"use client";

import {
  DragDropContext,
  Droppable,
  Draggable
} from "@hello-pangea/dnd";

const columns = {
  todo: {
    title: "Todo",
    items: []
  },
  progress: {
    title: "In Progress",
    items: []
  },
  done: {
    title: "Done",
    items: []
  }
};

export default function KanbanBoard() {
  return (
    <DragDropContext
      onDragEnd={() => {}}
    >
      <div className="grid md:grid-cols-3 gap-6">
        {Object.entries(columns).map(
          ([id, column]) => (
            <Droppable
              droppableId={id}
              key={id}
            >
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="
                  rounded-2xl
                  bg-white/5
                  p-4
                  min-h-[400px]
                  "
                >
                  <h2 className="font-bold mb-4">
                    {column.title}
                  </h2>

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          )
        )}
      </div>
    </DragDropContext>
  );
}
