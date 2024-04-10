import React, { useState } from "react";

function App() {
  const unlockedScreen = () => (
    <div style={{ textAlign: "center" }}>Login oldunuz.</div>
  );

  return (
    <CombinationLock combination={[1, 2, 3, 4]} NextScreen={unlockedScreen} />
  );
}

const CombinationLock = ({ combination, NextScreen }) => {
  // KODUNUZ BURAYA GELECEK
  const [input, setInput] = useState([]);
  const [error, setError] = useState(false);

  const handleButtonClick = (value) => {
    if (input.length < combination.length) {
      setInput([...input, value]);
    }
  };

  const checkCombination = () => {
    if (JSON.stringify(input) === JSON.stringify(combination)) {
      return true;
    } else {
      setError(true);
      setInput([]);
      return false;
    }
  };

  const resetInput = () => {
    setInput([]);
    setError(false);
  };
  return (
    <div className="text-center">
      <div className="mb-4">
        {error && <div className="text-red-500">Kombinasyon yanlış!</div>}
        {input.map((digit, index) => (
          <span key={index} className="mr-2">{digit}</span>
        ))}
      </div>
      <div className="mb-4">
        <button className="mr-2" onClick={() => handleButtonClick(1)}>1</button>
        <button className="mr-2" onClick={() => handleButtonClick(2)}>2</button>
        <button className="mr-2" onClick={() => handleButtonClick(3)}>3</button>
        <button className="mr-2" onClick={() => handleButtonClick(4)}>4</button>
      </div>
      <div className="mb-4">
        {input.length === combination.length && (
          <button className="mr-2" onClick={checkCombination}>Kontrol Et</button>
        )}
        <button onClick={resetInput}>Sıfırla</button>
      </div>
      {input.length === combination.length && checkCombination() && <NextScreen />}
    </div>
  );
};

export default App;
