import React, { useState } from "react";
import GridLayout from "react-grid-layout";
import GridItem from "../components/GridItem";

const Canvas = () => {
  const [gridLayout, setGridLayout] = useState([
    // { i: "item1", x: 0, y: 0, w: 2, h: 2 },
    // { i: "item2", x: 2, y: 0, w: 2, h: 4 },
    // { i: "item3", x: 4, y: 0, w: 2, h: 6 },
  ]);

  const [components, setComponents] = useState([]);
  const [draggingOverGrid, setDraggingOverGrid] = useState(false);

  const handleLayoutChange = (newLayout) => {
    setGridLayout(newLayout);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDraggingOverGrid(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDraggingOverGrid(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const type = e.dataTransfer.getData("type"); // get the transferred HTML data
    const data = JSON.parse(e.dataTransfer.getData("data")); // get the transferred component data

    const { clientX, clientY } = e;
    const { top, left } = e.currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top + e.currentTarget.scrollTop;

    console.log("calculated y", y);
    console.log("calculated x", x);

    const newItem = {
      i: Math.random().toString(36).substring(7),
      // x: Math.round(x / 100) * 2,
      // y: Math.floor((e.nativeEvent.offsetY + 15) / 40),
      x: x,
      y: y,
      w: 4,
      h: 2,
      type: type,
      data: data,
    };

    const newComponent = data;

    console.log(newComponent, "newComponent handle drop");
    setGridLayout((prevLayout) => [...prevLayout, newItem]);
    setComponents((prevComponent) => [...prevComponent, newComponent]);
  };

  const handleGridItemClick = (e) => {
    console.log(e, "from handleGridItemClick");
    console.log("item clicked");
  };

  const renderItems = () => {
    return gridLayout.map((item, index) => (
      <div key={item.i}>
        <GridItem
          onClick={handleGridItemClick}
          key={item.i}
          data={components[index]}
          data-grid={item}
        />
      </div>
    ));
  };

  return (
    <div
      style={{ height: "100vh", width: "100%" }}
      className="relative col-span-3 p-3"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
    >
      <GridLayout
        className={`border-2 border-blue-100 ${
          draggingOverGrid ? "border-2 border-blue-500" : ""
        }`}
        layout={gridLayout}
        cols={12}
        rowHeight={40}
        width={700}
        style={{ height: "80vh" }}
        onLayoutChange={handleLayoutChange}
      >
        {renderItems()}
      </GridLayout>
    </div>
  );
};

export default Canvas;
