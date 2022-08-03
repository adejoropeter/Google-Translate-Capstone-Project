import React, { useId, useState } from "react";
import { FaTimes } from "react-icons/fa";
const Modal = ({ setShowModal, fromLanguage, setChosenLng, chosenLng }) => {
  const [searchLng, setSearchLng] = useState("");
  const filtered = fromLanguage.filter((language) => {
    return language.name.toLowerCase().includes(searchLng.toLowerCase());
  });
  return (
    <>
      <div className="flex items-center w-[100%] ">
        <input
          value={searchLng}
          type="search"
          className=" h-[30px] w-[95%] outline-none bg-pink-400  border-2 border-blue-500"
          onChange={(e) => setSearchLng(e.target.value)}
        />
        <div className="w-[5%]">
          <FaTimes
            size="30px"
            className="text-white"
            onClick={() => setShowModal(null)}
          />
        </div>
      </div>
      <div>
        <ul>
          {filtered.map(({ name, id }) => {
            return (
              <li
                className="cursor-pointer text-white text-xl"
                key={id}
                onClick={(e) => {
                  setShowModal(null);
                  setChosenLng(e.target.textContent);
                }}
              >
                {name}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Modal;
