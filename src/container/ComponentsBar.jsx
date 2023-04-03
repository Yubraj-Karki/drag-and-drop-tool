import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Draggable from "./Draggable";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getUIElement } from "../slices/uiElement";
import { styleUi } from "../slices/uiStyling";

const ComponentsBar = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          // "https://6420844925cb6572104afd56.mockapi.io/api/v1/uielements/"
          "https://642990925a40b82da4d5a9b0.mockapi.io/api/v1/uielements/"
        );
        const data = response.data;
        dispatch(getUIElement(data));
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [dispatch]);

  const uiElements = useAppSelector((state) => state.uiElement);
  const styleArray = useAppSelector((state) => state.uiStyling);

  console.log(styleArray, "style array");

  // const test = dispatch(styleUi({ index: 0, property: "color", value: "red" }));

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
            {uiElements &&
              uiElements.items.map((component) => {
                return (
                  <Draggable type={component.type} data={component}>
                    <div className="bg-white p-2 text-center border-gray-200 border-2 cursor-pointer">
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
