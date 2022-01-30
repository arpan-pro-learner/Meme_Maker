import { useContext } from "react";

import MemeContext from "../Context/memeContext";

const Preview = () => {
  const { imgData, upTitle, downTitle, setImgData } = useContext(MemeContext);

  const Img = <img className="meme_box" src={imgData} alt="" />;
  const up_Title = (
    <div className="meme_title_box">
      <p className="meme_title_up">{upTitle}</p>
    </div>
  );
  const down_title = (
    <div className="meme_title_box">
      <p className="meme_title_down">{downTitle}</p>
    </div>
  );
 
  if (!imgData) return null;

  return (
    <div>
      <p className="meme_preview">⬇ Meme Preview ⬇</p>
      {imgData && <button className="delete_btn" onClick={() => setImgData(null)}>DELETE MEME</button>}
      {up_Title}
      {Img}
      {down_title} <br />
    </div>
  );
};

export default Preview;
