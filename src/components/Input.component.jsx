import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const Input = ({ style, selectedLng, setShowModal }) => {
  return (
    <div
      className="flex items-center relative h-[30px] cursor-pointer"
      onClick={() => setShowModal(style)}
    >
      <input
        value={selectedLng}
        className="w-[8rem] p-2 md:w-[240px] h-[50px] text-2xl font-semibold md:p-2 border-0 border-white border-solid rounded-md cursor-pointer"
        placeholder={style}
        disabled={true}
      />
      <div>
        <AiFillCaretDown
          className="text-blue-500 w-[2rem] absolute top-2 right-12 md:right-8 md:top-0 "
          size={"1.5rem"}
        />
      </div>
    </div>
  );
};

export default Input;
