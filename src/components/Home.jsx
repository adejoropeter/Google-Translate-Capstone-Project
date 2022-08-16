import React, { useState, useId, useEffect } from "react";
import { FaExchangeAlt, FaArrowAltCircleRight } from "react-icons/fa";
import Modal from "./Modal.component";
import axios from "axios";
import TextArea from "./TextArea.component";
const Home = () => {
  const [showModal, setShowModal] = useState(null);
  const [fromLanguage, setFromLanguage] = useState(null);

  const GET = () => {
    const axios = require("axios");

    const options = {
      method: "GET",
      url: "http://localhost:8000/get",
      headers: {
        "Accept-Encoding": "application/gzip",
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setFromLanguage(response.data);
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

  const exchange = () => {
    setFrom(to);
    setTo(from);
    setTextToTranslate(translatedText);
    setTranslatedText(textToTranslate);
  };

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
        "X-RapidAPI-Key": "e89c441662msh5494c52548eb227p1fee68jsn19bd083abb9d",
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
        setTranslatedText(error);
      });
  };
  return (
    <div className="flex justify-between md:justify-between relative  p-5">
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
          <div className="text-white cursor-pointer " onClick={exchange}>
            <FaExchangeAlt className="w-[4rem] " size={"2rem"} />
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
            className="  absolute top-[65%] md:top-[70%] left-[55%] -translate-x-[50%] -translate-y-[50%]"
            onClick={translate}
          >
            <FaArrowAltCircleRight className="w-10 h-10 md:w-10 md:h-10 text-white" />
          </div>
        </>
      )}
      {showModal && (
        <div className="w-[100%]">
          <Modal
            fromLanguage={fromLanguage}
            setShowModal={setShowModal}
            setChosenLng={showModal === "input" ? setFrom : setTo}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
