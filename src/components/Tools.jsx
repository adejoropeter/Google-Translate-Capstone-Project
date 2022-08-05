import React from "react";
// import logo from "../components/logo.svg";

const Tools = () => {
  return (
    <div className="bg-[#151C2C]">
      <div>
        <h1 className="text-4xl text-blue-500"> Tools</h1>
      </div>
      <div className="flex ">
        <img src="/logo512.png" className="w-[100px] h-[100px]" />
        <img src="/download.png" alt="" className="w-[100px] h-[100px] " />
      </div>
      <div className="text-end text-white text-lg">
        You can message me lowkey for my CV. Thank You...
      </div>
    </div>
  );
};

export default Tools;
