import React, { useState } from "react";
import GridLayout from "react-grid-layout";
// import "./styles.css";

export default function App() {
  const [layout, setLayout] = useState([]);
  const [highlight, setHighlight] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleDragStart = (event, id, type) => {
    event.dataTransfer.setData("text/plain", id);
    event.dataTransfer.setData("text/type", type);
    setHighlight(true);
  };

  const handleDragEnd = () => {
    setHighlight(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("text/plain");
    const type = event.dataTransfer.getData("text/type");
    const newLayout = [...layout];
    newLayout.push({ i: `${id}-${counter}`, x: 0, y: 0, w: 1, h: 1, type });
    setLayout(newLayout);
    setHighlight(false);
    setCounter(counter + 1);
  };

  const renderButton = (id, label) => {
    return (
      <button
        id={id}
        key={id}
        draggable
        onDragStart={(event) => handleDragStart(event, id, "button")}
        onDragEnd={handleDragEnd}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {label}
      </button>
    );
  };

  const renderInput = (id, type) => {
    return (
      <div
        key={id}
        draggable
        onDragStart={(event) => handleDragStart(event, id, "input")}
        onDragEnd={handleDragEnd}
        className="p-2 border rounded-md"
      >
        <label className="block mb-1 font-bold">{id}:</label>
        <input type={type} className="block w-full" />
      </div>
    );
  };

  const renderText = (id) => {
    return (
      <div
        key={id}
        draggable
        onDragStart={(event) => handleDragStart(event, id, "text")}
        onDragEnd={handleDragEnd}
        className="p-2 border rounded-md"
      >
        <label className="block mb-1 font-bold">{id}:</label>
        <div contentEditable className="h-16 bg-white"></div>
      </div>
    );
  };

  return (
    <div className="flex">
      <div className="Sidebar w-64 p-4 border-r">
        {renderButton("button1", "Button 1")}
        {renderButton("button2", "Button 2")}
        {renderInput("input1", "text")}
        {renderInput("input2", "number")}
        {renderText("text1")}
        {renderText("text2")}
      </div>

      <div
        className={`Canvas flex-1 p-4 ${
          highlight ? "bg-blue-100" : "bg-white"
        }`}
        onDrop={handleDrop}
        onDragOver={(event) => event.preventDefault()}
      >
        <GridLayout layout={layout} cols={12} rowHeight={50} width={1200}>
          {layout.map((item) => {
            switch (item.type) {
              case "button":
                return renderButton(item.i, item.i);
              case "input":
                return renderInput(item.i, item.type);
              case "text":
                return renderText(item.i);
              default:
                return null;
            }
          })}
        </GridLayout>
      </div>
    </div>
  );
}
