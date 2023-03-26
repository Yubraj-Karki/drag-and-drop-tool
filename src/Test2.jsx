import React from "react";
import GridLayout from "react-grid-layout";

const Test2 = () => {
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2 },
    { i: "b", x: 1, y: 0, w: 2, h: 1 },
    { i: "c", x: 3, y: 0, w: 1, h: 1 },
    { i: "d", x: 0, y: 2, w: 3, h: 1 },
  ];

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

  return (
    <div>
      {renderButton("button1", "button")}
      <GridLayout layout={layout} cols={4} rowHeight={50} width={1200}>
        <div className="bg-green-500" key="a">
          Item a
        </div>
        <div className="bg-green-500" key="b">
          Item b
        </div>
        <div className="bg-green-500" key="c">
          Item c
        </div>
        <div className="bg-green-500" key="d">
          Item d
        </div>
      </GridLayout>
    </div>
  );
};

export default Test2;
