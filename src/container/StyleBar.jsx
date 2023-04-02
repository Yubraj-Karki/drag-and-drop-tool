import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StyleInput from "../components/StyleInput";
import Loader from "../components/Loader";
import { all } from "axios";
import { addStyle } from "../slices/styleBarSlice";

const StyleBar = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [style, setStyle] = useState({
    label: "",
    height: "",
    width: "",
    color: "",
  });

  const [allStyles, setAllStyles] = useState([]);

  // Accessing the input field values
  const { label, height, width, color } = style;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStyle({ ...style, [name]: value });
  };

  const handleStyleFormSubmit = (e) => {
    e.preventDefault();

    if (style.label && style.height && style.width && style.color) {
      const newStyle = { ...style, id: new Date().getTime().toString() };
      setAllStyles([...allStyles, newStyle]);

      dispatch(addStyle([...allStyles, newStyle]));

      setStyle({ label: "", height: "", width: "", color: "" });
    }
  };

  const styles = useSelector((state) => state.styleBarSlice.style);

  console.log(styles, "styles");

  return (
    <div className="bg-[#FFF] p-5 h-full w-full">
      <h3 className="font-medium text-[19px] text-[#1F1E1E] mb-[20px]">
        Styles
      </h3>
      <form onSubmit={(e) => handleStyleFormSubmit(e)} action="post">
        <StyleInput
          onChange={handleInputChange}
          name="label"
          label="label"
          inputType="text"
          isLoading={isLoading}
          value={label}
        />
        <StyleInput
          onChange={handleInputChange}
          name="height"
          label="height"
          inputType="number"
          isLoading={isLoading}
          value={height}
        />
        <StyleInput
          onChange={handleInputChange}
          name="width"
          label="width"
          inputType="number"
          isLoading={isLoading}
          value={width}
        />
        <StyleInput
          onChange={handleInputChange}
          name="color"
          label="color"
          inputType="text"
          isLoading={isLoading}
          value={color}
        />
        <button type="submit">Apply</button>
      </form>
      <h1>{styles && styles[0] && styles[0].color}</h1>
    </div>
  );
};

export default StyleBar;
