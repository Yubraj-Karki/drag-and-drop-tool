import React, { useState, useEffect } from "react";
import StyleInput from "../components/StyleInput";
import Loader from "../components/Loader";

const StyleBar = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {}, []);
  return (
    <div className="bg-[#FFF] p-5 h-full w-full">
      <h3 className="font-medium text-[19px] text-[#1F1E1E] mb-[20px]">
        Styles
      </h3>
      <StyleInput label="Label" inputType="text" isLoading={isLoading} />
      <StyleInput label="Height" inputType="number" isLoading={isLoading} />
      <StyleInput label="Width" inputType="number" isLoading={isLoading} />
    </div>
  );
};

export default StyleBar;
