import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => setText(text.toUpperCase());
  const handleLoClick = () => setText(text.toLowerCase());
  const handleCleClick = () => setText("");
  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    alert("Text Copied!");
  };
  const handleRemoveSpace = () => {
    let newText = text.split(/\s+/).join(" ").trim();
    setText(newText);
  };
  const handleOnChange = (event) => setText(event.target.value);

  return (
    <div>
      <div
        className="form-floating"
        style={{
          backgroundColor: props.mode === "dark" ? "#0c1b25ff" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h3>{props.Heading}</h3>
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          value={text}
          onChange={handleOnChange}
          style={{
            height: "350px",
            backgroundColor: props.mode === "dark" ? "#184a7cff" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          id="floatingTextarea2"
        ></textarea>
      </div>

      <div className="container1 mb-5">
        <button
          styles={props.buttonStyles}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>

        <button
          style={props.buttonStyles}
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>

        <button
          style={props.buttonStyles}
          onClick={handleCleClick}
        >
          Clear Text
        </button>

        <button
          style={props.buttonStyles}
          onClick={handleCopyText}
        >
          Copy Text
        </button>

        <button
          style={props.buttonStyles}
          onClick={handleRemoveSpace}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div className="container">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((word) => word !== "").length} words and{" "}
          {text.length} characters
        </p>
        <p>
          {text.split(/\s+/).filter((word) => word !== "").length * 0.008}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the above textbox to preview it here"}
        </p>
      </div>
    </div>
  );
}

export default TextForm;
