import React from 'react';
import Button from './button/buttonComponent';
import buttonKeys from './data';
import './calculator.css';

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = { result: buttonKeys };
  }

  render() {
    const { result } = this.state;
    return (
      <div className="calculator">
        <div className="result-screen">
          <p id="score">0</p>
        </div>
        <div className="button-section">
          {result.map((buttonkey) => (
            <Button
              key={buttonkey.value}
              value={buttonkey.value}
              role={buttonkey.type}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Calculator;
