import React, { useState } from "react";
import Loader from "../components/Loader";
import Draggable from "./Draggable";

const ComponentsBar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [components, setComponents] = useState([
    { type: "button", label: "Button" },
    { type: "input", label: "Input" },
    { type: "text", label: "Text" },
    { type: "image", label: "Image" },
  ]);

  return (
    <div className="bg-[#FFF] p-5 h-full w-full">
      <h3 className="font-medium text-[19px] text-[#1F1E1E] mb-[20px]">
        Components
      </h3>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="components grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {components.map((component) => {
              return (
                <Draggable type={component.type} data={component}>
                  <div className="bg-white p-4 border-gray-200 border-2 cursor-pointer">
                    {component.label}
                  </div>
                </Draggable>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default ComponentsBar;
