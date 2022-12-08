import React, { useEffect, useState } from 'react';
import Button from './button/buttonComponent';
import buttonKeys from './data';
import './styles/calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [buttons, setButtons] = useState([]);
  const [results, setResults] = useState({});

  useEffect(() => {
    setButtons(buttonKeys);
    return () => {
      setButtons([]);
    };
  }, []);

  const handleChange = (input) => {
    const values = calculate(results, input.target.textContent);
    const newResult = { ...results };
    newResult.total = values.total;
    newResult.next = values.next;
    newResult.operation = values.operation || null;
    setResults(newResult);
  };

  return (
    <div className="calculator-container">
      <p id="slogan">Let&apos;s do some math!</p>
      <div className="calculator">
        <div className="result-screen">
          <p data-testid="total" id="total">
            {results.total}
          </p>
          <p id="op">{results.operation}</p>
          <p id="next">{results.next || 0}</p>
        </div>
        <div className="button-section">
          {buttons.map((buttonkey) => (
            <Button
              key={buttonkey.value}
              value={buttonkey.value}
              role={buttonkey.type}
              handleChange={handleChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
