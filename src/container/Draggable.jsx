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

  const updateUi = () => {
    dispatch(styleUi({ index: 0, property: "color", value: "red" }));
    console.log(style, "style");
  };

  return (
    <div
      style={style}
      onClick={updateUi}
      draggable
      resizable={true}
      onDragStart={handleDragStart}
    >
      {children}
    </div>
  );
};

export default Draggable;
