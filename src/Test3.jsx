import React, { useState } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

export default function App() {
  const [layout, setLayout] = useState([]);

  const handleDrop = (event) => {
    event.preventDefault();
    const buttonId = event.dataTransfer.getData("text/plain");
    const newLayout = [...layout];
    newLayout.push({
      i: buttonId,
      x: 0,
      y: 0,
      w: 2,
      h: 2,
      static: false,
      isDraggable: true,
      isResizable: true,
    });
    setLayout(newLayout);
  };

  const onDragStart = (event, buttonId) => {
    event.dataTransfer.setData("text/plain", buttonId);
  };

  const renderButton = (id, label) => {
    return (
      <button
        id={id}
        key={id}
        draggable
        onDragStart={(event) => onDragStart(event, id)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {label}
      </button>
    );
  };

  return (
    <div className="flex">
      <div className="Sidebar w-64 p-4 border-r">
        {renderButton("button1", "Button 1")}
      </div>

      <div
        className="Canvas flex-1 p-4 bg-white"
        onDrop={handleDrop}
        onDragOver={(event) => event.preventDefault()}
      >
        <GridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={30}
          width={1200}
        >
          {layout.map((item) => {
            return (
              <div key={item.i}>
                <div className="bg-gray-200 p-2">{item.i}</div>
              </div>
            );
          })}
        </GridLayout>
      </div>
    </div>
  );
}
