/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import { useContext } from "react";

import MemeContext from "../Context/memeContext";

const ChooseImg = () => {
  const { setImgData } = useContext(MemeContext);
  var reader = new FileReader();

  function onChange(e) {
    reader.readAsDataURL(e.target.files[0]);
    reader.addEventListener("load", function () {
      setImgData(reader.result);
      localStorage.setItem("image-data", JSON.stringify(reader.result));
    });
  }

  return <input type="file" id="myfile" onChange={onChange} />;
};

export default ChooseImg;
