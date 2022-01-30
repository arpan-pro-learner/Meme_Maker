import { createContext, useState } from "react";

const MemeContext = createContext();

export const MemeProvider = (props) => {
  const [upTitle, setUpTitle] = useState(() => {
    const title = localStorage.getItem("up-title");
    return title ? JSON.parse(title) : "";
  });
  const [downTitle, setDownTitle] = useState(() => {
    const title = localStorage.getItem("down-title");
    return title ? JSON.parse(title) : "";
  });

  const [imgData, setImgData] = useState(() => {
    const data = localStorage.getItem("image-data");
    return data ? JSON.parse(data) : "";
  });

  return (
    <MemeContext.Provider
      value={{
        upTitle,
        downTitle,
        setUpTitle,
        setDownTitle,
        imgData,
        setImgData,
      }}
    >
      {props.children}
    </MemeContext.Provider>
  );
};

export default MemeContext;
