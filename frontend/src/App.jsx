import { useState } from 'react'
import Cmatrix from './components/cmatrix'
import Terminal from './components/Terminal'
import Header from './components/Header'
import Response from './components/Response'
function App() {
  const [inputValue, setInputValue] = useState('');
  const handleInputSubmit = (value) => {
    setInputValue(value);
  };
  return (
    <>
      <Header/>
      <Terminal onInputSubmit={handleInputSubmit} />
      <Response value={inputValue}/>
    </>
  )
}

export default App
