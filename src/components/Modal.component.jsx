import React, { useId, useState } from "react";
import { FaTimes } from "react-icons/fa";
const Modal = ({ setShowModal, fromLanguage, setChosenLng }) => {
  const id = useId();
  const [searchLng, setSearchLng] = useState("");
  let {
    data: { languages },
  } = fromLanguage;
  const langs = languages.filter((language) => {
    return language.language.toLowerCase().includes(searchLng.toLowerCase());
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
      <div className=" w-[100%] h-[270px] overflow-scroll mt-6 ">
        <ol className="flex flex-wrap">
          {langs.map(({ language }) => {
            return (
              <li
                className="cursor-pointer text-white text-xl p-2"
                key={id}
                onClick={(e) => {
                  setShowModal(null);
                  setChosenLng(e.target.textContent);
                }}
              >
                {language}
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default Modal;
