import React, { useState, useId } from "react";
import Modal from "./components/Modal.component";
import TextArea from "./components/TextArea.component";
import TextInput from "./components/TextInput";
import { FaExchangeAlt } from "react-icons/fa";
const App = () => {
  const [showModal, setShowModal] = useState(null);
  const [fromLanguage, setFromLanguage] = useState([
    {
      name: "French",
      id: useId(),
    },
    {
      name: "Yoruba",
      id: useId(),
    },
    {
      name: "Igbo",
      id: useId(),
    },
    {
      name: "Hausa",
      id: useId(),
    },
    {
      name: "Polish",
      id: useId(),
    },
  ]);

  const [from, setFrom] = useState("English");
  const [to, setTo] = useState("Polish");
  const [textToTranslate, setTextToTranslate] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const translate = () => {
    console.log("kdk");
  };
  // console.log(showModal);
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <main className=" bg-[#202124] w-[600px] h-[350px] ">
        <div className="flex justify-between">
          {!showModal && (
            <>
              <TextArea
                style="input"
                selectedLng={from}
                modal={showModal}
                setShowModal={setShowModal}
                textToTranslate={textToTranslate}
                setTextToTranslate={setTextToTranslate}
              />
              <div
                className="text-white "
                onClick={() => {
                  setFrom(to);
                  setTo(from);
                }}
              >
                <FaExchangeAlt size="30px" />
              </div>
              <TextArea
                style="output"
                selectedLng={to}
                modal={showModal}
                setShowModal={setShowModal}
                translatedText={translatedText}
                setTranslatedText={setTranslatedText}
              />
              <div
                className="absolute top-[50%] left-[50%] -translate-x-[60%] -translate-y-[50%]"
                onClick={translate}
              >
                <button className="bg-blue-500 w-fit h-fit text-2xl text-white">
                  Translate
                </button>
              </div>
            </>
          )}
          {showModal && (
            <div className="w-[100%]">
              <Modal
                fromLanguage={fromLanguage}
                setShowModal={setShowModal}
                chosenLng={showModal === "input" ? from : to}
                setChosenLng={showModal === "input" ? setFrom : setTo}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
export default App;
