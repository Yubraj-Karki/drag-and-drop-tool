import React from "react";
const Draggable = ({ type, data, children }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("type", type);
    e.dataTransfer.setData("data", JSON.stringify(data));
  };

  return (
    <div draggable onDragStart={handleDragStart}>
      {children}
    </div>
  );
};

export default Draggable;
