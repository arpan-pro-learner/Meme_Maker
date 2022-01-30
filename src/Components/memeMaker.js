import InputForm from "./Inputs";
import Preview from "./Preview";

const MemeMaker = () => {
  return (
    <div className="App">
      <header>
        <p className="main_head"> Meme Maker </p>
        <div className="form_center">
          <InputForm />
        </div>
        <div>
          <Preview />
        </div>
      </header>
    </div>
  );
};

export default MemeMaker;
