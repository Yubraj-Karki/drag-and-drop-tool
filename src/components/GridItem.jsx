import { Input } from "postcss";
import React from "react";

const GridItem = ({ data, onClick, key }) => {
  return (
    <div>
      {[data].map((item) => {
        // const { style } = item;
        console.log(item.style, "item style from GridItem component");
        if (item.type === "button") {
          return (
            <button
              style={item.style}
              key={key}
              onClick={onClick}
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              <p contentEditable="true">Text</p>
            </button>
          );
        } else if (item.type === "input") {
          return (
            <input
              style={item.style}
              key={key}
              onClick={onClick}
              type="text"
              class="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-500"
            />
          );
        } else if (item.type === "text") {
          return (
            <h1
              style={item.style}
              key={key}
              onClick={onClick}
              className="text-[30px]"
              contentEditable="true"
            >
              Text here
            </h1>
          );
        } else {
          return <button>This type is not recognized</button>;
        }
      })}
    </div>
  );
};

export default GridItem;
