import React, { useState, useRef, useEffect } from "react";

const Terminal = ({ onInputSubmit }) => {
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const inputRef = useRef(null);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setSubmitted(true);
      onInputSubmit(input);
    }
  };

  useEffect(() => {
    const handleClick = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

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
          ref={inputRef}
          autoFocus
          className="bg-transparent outline-none flex-grow min-w-0 ml-1 cursor-default"
        />
      </div>
    </>
  );
};

export default Terminal;
