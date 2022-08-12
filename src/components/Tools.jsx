import React from "react";
// import logo from "../components/logo.svg";

const Tools = () => {
  return (
    <div className="bg-[#151C2C] h-[100%] p-4 ">
      <div>
        <h1 className="text-4xl text-blue-500 mb-4"> Tools</h1>
      </div>
      <div className="flex ">
        <img
          src="/logo512.png"
          className="w-[8rem] md:w-[12rem] h-[8rem] md:h-[12rem] animate-spin mr-4"
        />
        <img
          src="/download.png"
          alt=""
          className="w-[8rem] md:w-[12rem] h-[8rem] md:h-[12rem] animate-bounce"
        />
      </div>
      <div className=" text-start md:text-end  animate-pulse mt-5">
        <a
          href="https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=605fd1d379&attid=0.1&permmsgid=msg-a:r7694450501260694637&th=1827a4c219509191&view=att&disp=inline&realattid=f_l6kc3v4l1&saddbat=ANGjdJ-XWU9YKA7JrOpF1f4T48huDrO6YILTSeeZRXsDnYOuswqpmutLQmpqvpNan-i7Q1L4WQV24BqOkbAZmiEQnmlk4juTGB8uTL1eJDwljs8zcESUhP4o7PS3DjzRhmkDZTBRoq0RJFv0e9FFhUumqHCdGcqZBdArJsDg2ioibGzzKU00NRFKaN4_dUO7JY4ElSYlKPbLNVCvNoXVfiTmKUNZC3Nb0q3Y3K63_0eXZ6WP1HyHqOlJLYZpNeTRT2EaUhQjmnpX7qNAjsLI6XQPK_pWGeoTiwwzsccmUYZ-G0OvdSZgUjjGEIsFl8Z22X9S-1jsAiXwpnt3DvLzCPHiKLaZdyjPE1dNR9JgA74eQ-MBSkeabfPLaD9t_AJpqI1pcrjCD9Q-0T7OXE-Vt_vF6DALmWatRUaoso9o3e3RwHQL_MF5N1WNUhWsLHueSnKCS3UXuJFUSDKODD_ruKDDZlpQ-U-7VWpexEd6FyaINo0OVYANc0Vp5ckXr-QzKgXaTU_hzNQVrqNXBDC54XZLvfNuJohxcvjX-yd34uAxWGliYcPEiTGV8X8YYoC9xkQH7sL975_QxswDo9hsOcyFrTcirR8WkN6D9kWG7hZpbVu1JFYTgiGH5afNPIJ-B6l35b6ZUZHTfGfre0O__sznu7WrRFHVCtJCFL2HCLrtaeNn7-jW_OFmVvoYDUNhC0AJyQZxl-d_Omi4-x3UEXSFLVnNnaCXcuI6q6GEvawIoTvzBEgEEjJw7YQuXnE"
          target="_blank"
        >
          <button className="font-semibold text-2xl text-white md:text-2xl">
            CheckOut My CV.
          </button>
        </a>
      </div>
    </div>
  );
};

export default Tools;
