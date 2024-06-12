import React, { useState, useEffect } from "react";
import Terminal from "./components/Terminal";
import Header from "./components/Header";
import Response from "./components/Response";

function App() {
  const [terminalResponses, setTerminalResponses] = useState([""]);
  const [clearScreen, setClearScreen] = useState(false);
  const [showHeader, setShowHeader] = useState(true)

  useEffect(() => {
    if (clearScreen) {
      setTerminalResponses([""]);
      setClearScreen(false);
      setShowHeader(false)
    }
  }, [clearScreen]);

  const handleInputSubmit = (index, value) => {
    if (value.trim().toLowerCase() === "clear") {
      setClearScreen(true);
    } else {
      setTerminalResponses((prevResponses) => {
        const newResponses = [...prevResponses];
        newResponses[index] = value;
        return [...newResponses, ""];
      });
    }
  };

  return (
    <div className="bg-[#1A1A1A] text-[#00FF00] p-4 font-[JetBrains Mono] md:leading-[1.6rem] md:text-[1rem] text-[.8rem]">
      { showHeader && <Header />}
      {terminalResponses.map((response, index) => (
        <div key={index}>
          <Terminal
            onInputSubmit={(value) => handleInputSubmit(index, value)}
            clearScreen={clearScreen}
          />
          {response && <Response value={response} />}
        </div>
      ))}
    </div>
  );
}

export default App;
