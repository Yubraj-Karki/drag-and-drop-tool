import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="border-4 border-gray-300 border-opacity-50 rounded-full w-12 h-12 animate-spin opacity-100"></div>
    </div>
  );
};

export default Loader;
