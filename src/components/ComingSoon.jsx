import React, { useState } from "react";

const ComingSoon = () => {
  const [backgroundColor, setBackgroundColor] = useState(
    "bg-gradient-to-r from-blue-400 to-green-500"
  );

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };
  return (
    <div
      className={`min-h-screen ${backgroundColor} flex justify-center items-center px-5`}
    >
      <div className="bg-black bg-opacity-50 py-8 px-6 sm:py-12 sm:px-8 rounded-lg">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-center">
          Coming Soon...🙋🏻‍♂️
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 text-center">
          Our website is under construction. ⚒️
        </p>
        <div className="flex flex-wrap justify-center space-x-2 space-y-2">
          <div
            className="w-16 h-16 rounded-md cursor-pointer mt-2 ml-2"
            onClick={() =>
              handleColorChange("bg-gradient-to-r from-red-400 to-yellow-500")
            }
            style={{
              background: "linear-gradient(to right, #fc5c65, #fd9644)",
            }}
          ></div>
          <div
            className="w-16 h-16 rounded-md cursor-pointer"
            onClick={() =>
              handleColorChange("bg-gradient-to-r from-blue-400 to-green-500")
            }
            style={{
              background: "linear-gradient(to right, #45aaf2, #4ca1af)",
            }}
          ></div>
          <div
            className="w-16 h-16 rounded-md cursor-pointer"
            onClick={() =>
              handleColorChange("bg-gradient-to-r from-purple-400 to-pink-500")
            }
            style={{
              background: "linear-gradient(to right, #a55eea, #8a5eea)",
            }}
          ></div>
          <div
            className="w-16 h-16 rounded-md cursor-pointer"
            onClick={() =>
              handleColorChange("bg-gradient-to-r from-yellow-400 to-red-500")
            }
            style={{
              background: "linear-gradient(to right, #f7b731, #eb3b5a)",
            }}
          ></div>
          <div
            className="w-16 h-16 rounded-md cursor-pointer"
            onClick={() =>
              handleColorChange("bg-gradient-to-r from-teal-400 to-cyan-500")
            }
            style={{
              background: "linear-gradient(to right, #5f27cd, #34e7e4)",
            }}
          ></div>
          <div
            className="w-16 h-16 rounded-md cursor-pointer"
            onClick={() =>
              handleColorChange("bg-gradient-to-r from-indigo-400 to-blue-500")
            }
            style={{
              background: "linear-gradient(to right, #4b6cb7, #182848)",
            }}
          ></div>
          <div
            className="w-16 h-16 rounded-md cursor-pointer"
            onClick={() =>
              handleColorChange("bg-gradient-to-r from-gray-400 to-gray-500")
            }
            style={{
              background: "linear-gradient(to right, #d1d8e0, #a5b1c2)",
            }}
          ></div>
          <div
            className="w-16 h-16 rounded-md cursor-pointer"
            onClick={() =>
              handleColorChange("bg-gradient-to-r from-pink-400 to-rose-500")
            }
            style={{
              background: "linear-gradient(to right, #ff7b89, #ffccaa)",
            }}
          ></div>
          <div
            className="w-16 h-16 rounded-md cursor-pointer"
            onClick={() =>
              handleColorChange("bg-gradient-to-r from-amber-400 to-lime-500")
            }
            style={{
              background: "linear-gradient(to right, #ffbf00, #aaff00)",
            }}
          ></div>
          <div
            className="w-16 h-16 rounded-md cursor-pointer"
            onClick={() =>
              handleColorChange("bg-gradient-to-r from-cyan-400 to-sky-500")
            }
            style={{
              background: "linear-gradient(to right, #00d2d3, #3a7bd5)",
            }}
          ></div>
          <div
            className="w-16 h-16 rounded-md cursor-pointer"
            onClick={() =>
              handleColorChange(
                "bg-gradient-to-r from-green-400 to-emerald-500"
              )
            }
            style={{
              background: "linear-gradient(to right, #7bed9f, #3bba9c)",
            }}
          ></div>
          <div
            className="w-16 h-16 rounded-md cursor-pointer"
            onClick={() =>
              handleColorChange(
                "bg-gradient-to-r from-fuchsia-400 to-violet-500"
              )
            }
            style={{
              background: "linear-gradient(to right, #ff758c, #ff7eb3)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
