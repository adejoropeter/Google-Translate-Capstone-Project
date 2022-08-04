import React, { useState, useId, useEffect } from "react";
import Modal from "./components/Modal.component";
import TextArea from "./components/TextArea.component";
import TextInput from "./components/TextInput";
import { FaExchangeAlt } from "react-icons/fa";
import axios from "axios";
import { logo } from "react";
const App = () => {
  const [showModal, setShowModal] = useState(null);
  const [fromLanguage, setFromLanguage] = useState(null);

  const GET = () => {
    const axios = require("axios");

    const options = {
      method: "GET",
      url: "https://google-translate1.p.rapidapi.com/language/translate/v2/languages",
      headers: {
        "Accept-Encoding": "application/gzip",
        "X-RapidAPI-Key": "fe2053beadmsha1b4bdc713e32cbp19fc07jsn37a57b6280c6",
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setFromLanguage(response.data);
        // console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    GET();
  }, []);

  // console.log(fromLanguage);

  const [from, setFrom] = useState("en");
  const [to, setTo] = useState("yo");
  const [textToTranslate, setTextToTranslate] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const translate = () => {
    const axios = require("axios");

    const encodedParams = new URLSearchParams();
    encodedParams.append("q", textToTranslate);
    encodedParams.append("target", to);
    encodedParams.append("source", from);

    const options = {
      method: "POST",
      url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "application/gzip",
        "X-RapidAPI-Key": "fe2053beadmsha1b4bdc713e32cbp19fc07jsn37a57b6280c6",
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      },
      data: encodedParams,
    };

    axios
      .request(options)
      .then(function (response) {
        setTranslatedText(response.data.data.translations[0].translatedText);
      })
      .catch(function (error) {
        setTranslatedText("Something went wrong");
      });
  };
  // console.log(showModal);
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center flex-col">
      <img src={logo} />
      <h1 className="text-4xl">
        React <span className="text-pink-500">X</span> Tailwind
      </h1>
      <main className=" bg-[#202124] w-[600px] h-[350px] p-3">
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
                  setTextToTranslate(translatedText);
                  setTranslatedText(textToTranslate);
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
                to={to}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
export default App;
