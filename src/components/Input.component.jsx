import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const Input = ({ style, selectedLng, setShowModal }) => {
  return (
    <div
      className="flex items-center relative h-[30px] "
      onClick={() => setShowModal(style)}
    >
      <input
        value={selectedLng}
        className="w-[240px] h-[50px] border-0 border-white border-solid rounded-md "
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