import { useContext } from "react";

import MemeContext from "../Context/memeContext";
import ChooseImg from "./ChooseImg";

function InputForm() {
  const { upTitle, downTitle, setUpTitle, setDownTitle } =
    useContext(MemeContext);

  const handleUpChange = (e) => {
    setUpTitle(e.target.value);
    localStorage.setItem("up-title", JSON.stringify(e.target.value));
  };
  const handleDownChange = (e) => {
    setDownTitle(e.target.value);
    localStorage.setItem("down-title", JSON.stringify(e.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="subtitle" htmlFor="">
        Upside Title
      </label>
      <br />
      <div className="input-container ">
        <input
          type="text"
          className="input"
          onChange={handleUpChange}
          value={upTitle}
          placeholder="Enter Upside title"
        />
      </div>

      <label className="subtitle" htmlFor="">
        Downside title
      </label>
      <div className="input-container ">
        <input
          className="input"
          type="text"
          name="down title"
          placeholder="Enter Downside title"
          onChange={handleDownChange}
          value={downTitle}
        />
      </div>

      <label className="subtitle">Tags</label>
      <div className="input-container">
        <input
          className="input"
          placeholder=" Tags (Separate with comma)"
          type="text"
        />{" "}
      </div>

      <label className="subtitle">Language</label>
      <div className="input-container">
        <select className="input">
          <option value="Hindi">Hindi</option>
          <option value="English ">English</option>
        </select>
      </div>

      <ChooseImg />

      <div>
        {" "}
        <button className="submit submit:active">Upload</button>
      </div>
    </form>
  );
}

export default InputForm;
