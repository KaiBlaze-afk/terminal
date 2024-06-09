import React, { useState, useEffect } from "react";
import Terminal from "./components/Terminal";
import Header from "./components/Header";
import Response from "./components/Response";

function App() {
  const [terminalResponses, setTerminalResponses] = useState([""]);
  const [clearScreen, setClearScreen] = useState(false);

  useEffect(() => {
    if (clearScreen) {
      setTerminalResponses([""]);
      setClearScreen(false);
    }
  }, [clearScreen]);

  const handleInputSubmit = (index, value) => {
    if (value.trim() === "clear") {
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
    <>
      <Header />
      {terminalResponses.map((response, index) => (
        <div key={index}>
          <Terminal
            onInputSubmit={(value) => handleInputSubmit(index, value)}
            clearScreen={clearScreen}
          />
          {response && <Response value={response} />}
        </div>
      ))}
    </>
  );
}

export default App;
