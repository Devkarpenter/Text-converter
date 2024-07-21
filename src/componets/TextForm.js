import React, {useState} from "react";
import "./TextForm.css"

export default function Textform(props) {
  const handleupClick = () => {
      console.log("Uppercase on " + text);
      let newText = text.toUpperCase();
      setText(newText);
  }
  const handleloClick = () => {
      console.log("Uppercase on " + text);
      let newText = text.toLowerCase();
      setText(newText);
  }
  const handleclearClick = () => {
      let newText = "";
      setText(newText);
  }

  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);

}

  const [text, setText] = useState('');

  return (
    <>
    <div className="bg1">
    <h1>Enter Text -</h1>
    <div className="mb-3">
      <textarea className="form-control form" value={text} onChange={handleOnChange}  id="mybox" rows="8"></textarea>
    </div>
    <button className="button2" onClick={handleupClick}>convert to uppercase</button>
    <button className= "button2" onClick={handleloClick}>convert to lowercase</button>
    <button className= "button2" onClick={handleclearClick}>clear all</button>
    </div>
    <div class="container">
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").length} and words {text.length} charectors</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
    </>
  );
}
