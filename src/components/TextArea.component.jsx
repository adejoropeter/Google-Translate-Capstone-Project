import React from "react";
import Input from "./Input.component";

const TextArea = ({
  style,
  selectedLng,
  setShowModal,
  showModal,
  textToTranslate,
  setTextToTranslate,
  translatedText,
}) => {
  return (
    <div className="">
      <Input
        selectedLng={selectedLng}
        style={style}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <textarea
        onChange={(e) => setTextToTranslate(e.target.value)}
        value={style === "input" ? textToTranslate : translatedText}
        placeholder={style == "input" ? "Enter Text" : "Translating..."}
        disabled={style === "output"}
        className={`h-[10rem] md:h-[14rem] w-[8rem] md:w-[15rem] m-3 border-none border-0
        outline-none resize-none text-[#868B90] text-xl font-semibold md:text-2xl bg-[#424346]  mt-12 ${
          style === "output" ? null : "bg-opacity-0"
        }`}
      ></textarea>
    </div>
  );
};

TextArea.defaultProps = {
  placeholder: " Default PlaceHolder",
};

export default TextArea;
