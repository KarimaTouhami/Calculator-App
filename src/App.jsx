import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleOperator = (op) => {
    setInput(input + op);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const resetInput = () => {
    setInput('');
  };

  const resetResult = () => {
    setResult('');
  };

  return (
    <div>
      <h1>Simplest Working Calculator</h1>
      <div>Result: {result}</div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') calculateResult();
        }}
      />
      <div>
        <button onClick={() => handleOperator('+')}>add</button>
        <button onClick={() => handleOperator('-')}>subtract</button>
        <button onClick={() => handleOperator('*')}>multiply</button>
        <button onClick={() => handleOperator('/')}>divide</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={resetInput} className='button'>Reset Input</button>
        <button onClick={resetResult} className='button'>Reset Result</button>
      </div>
    </div>
  );
};

export default App;
