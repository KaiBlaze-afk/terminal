import { useState } from 'react';
import Terminal from './components/Terminal';
import Header from './components/Header';
import Response from './components/Response';

function App() {
  const [terminalResponses, setTerminalResponses] = useState(['']);

  const handleInputSubmit = (index, value) => {
    setTerminalResponses((prevResponses) => {
      const newResponses = [...prevResponses];
      newResponses[index] = value;
      return [...newResponses, ''];
    });
  };

  return (
    <>
      <Header />
      {terminalResponses.map((response, index) => (
        <div key={index}>
          <Terminal
            onInputSubmit={(value) => handleInputSubmit(index, value)}
          />
          {response && <Response value={response} />}
        </div>
      ))}
    </>
  );
}

export default App;
