import React, { useState, useRef, useEffect } from "react";

const Terminal = ({ onInputSubmit, clearScreen }) => {
  const [myinput, setMyinput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (clearScreen) {
      setMyinput("");
      setSubmitted(false);
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 0);
    }
  }, [clearScreen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        inputRef.current.focus();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleChange = (event) => {
    setMyinput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    onInputSubmit(myinput);
  };

  return (
      <form
        onSubmit={handleSubmit}
        className="flex items-center flex-wrap md:leading-[1.1rem]"
      >
        <span className="text-blue-400 flex-shrink-0">
          visitor@portfolio:~$
        </span>
        <input
          ref={inputRef}
          type="text"
          onChange={handleChange}
          disabled={submitted}
          value={myinput}
          autoFocus
          className="bg-transparent outline-none flex-grow min-w-0 ml-1 cursor-default"
        />
      </form>
  );
};

export default Terminal;
