import { useState } from "react";

function Left({ setVal }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div
      style={{
        border: "2px solid black",
        height: "100vh",
        width: "48vw",
      }}
    >
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          
        }}
      />

      <button
        onClick={() => {
          setVal(inputValue);
        }}
        
      >
        Submit
      </button>

      
    </div>
  );
}

export default Left;