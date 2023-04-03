import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";

import { styleUi } from "../slices/uiStyling";

const Draggable = ({ type, data, children }) => {
  const dispatch = useAppDispatch();

  const style = useAppSelector((state) => state.uiStyling);

  const handleDragStart = (e) => {
    e.dataTransfer.setData("type", type);
    e.dataTransfer.setData("data", JSON.stringify(data));
  };

  return (
    <div style={style} draggable resizable={true} onDragStart={handleDragStart}>
      {children}
    </div>
  );
};

export default Draggable;
