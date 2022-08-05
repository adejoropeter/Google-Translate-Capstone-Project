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
        className="w-[240px] h-[50px] text-xl p-2 border-0 border-white border-solid rounded-md cursor-pointer"
        placeholder={style}
        disabled={true}
      />
      <div>
        <AiFillCaretDown
          size="30px"
          className="text-blue-500 absolute right-8 top-0"
        />
      </div>
    </div>
  );
};

export default Input;
