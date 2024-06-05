import React, { useState } from "react";

const Terminal = ({onInputSubmit}) => {
  const [Input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false)
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
        setSubmitted(true);
      onInputSubmit(Input);
    }
  };
  return (
    <>
      <div className="flex items-center flex-wrap leading-[1.1rem]">
        <span className="text-blue-400 flex-shrink-0">
          visitor@portfolio:~$
        </span>
        <input
          type="text"
          disabled={submitted}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          className="bg-transparent outline-none flex-grow min-w-0 ml-1"
        />
      </div>
    </>
  );
};

export default Terminal;
