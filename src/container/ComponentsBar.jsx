import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";

const ComponentsBar = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {}, []);
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
            <div
              draggable
              class="bg-white p-4 border-gray-200 border-2 cursor-pointer"
            >
              image
            </div>
            <div
              draggable
              class="bg-white p-4 border-gray-200 border-2 cursor-pointer"
            >
              image
            </div>
            <div
              draggable
              class="bg-white p-4 border-gray-200 border-2 cursor-pointer"
            >
              image
            </div>
            <div
              draggable
              class="bg-white p-4 border-gray-200 border-2 cursor-pointer"
            >
              image
            </div>
            <div
              draggable
              class="bg-white p-4 border-gray-200 border-2 cursor-pointer"
            >
              image
            </div>
            <div
              draggable
              class="bg-white p-4 border-gray-200 border-2 cursor-pointer"
            >
              image
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ComponentsBar;
