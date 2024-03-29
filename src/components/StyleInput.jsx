import React, { useRef } from "react";
import Loader from "./Loader";

const StyleInput = ({ name, label, inputType, value, isLoading, onChange }) => {
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-3 gap-1 w-full items-center mb-[20px]">
          <p className="text-[12px] text-grey-90">{label}:</p>
          <input
            name={name}
            type={inputType}
            value={value}
            onChange={onChange}
            className="border bg-gray-light col-span-2 border-gray-400 px-1 block w-full appearance-none leading-normal"
          />
        </div>
      )}
    </>
  );
};

export default StyleInput;
