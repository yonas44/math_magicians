import React from 'react';
import Button from './button/buttonComponent';
import buttonKeys from './data';
import './calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      buttons: buttonKeys,
      results: { total: null, next: null, operation: null },
    };
  }

  handleChange = async (input) => {
    const { results } = this.state;
    const values = calculate(results, input.target.textContent);
    const newResult = { ...results };
    newResult.total = values.total;
    newResult.next = values.next;
    newResult.operation = values.operation || null;
    this.setState({ results: newResult });
  };

  render() {
    const { buttons, results } = this.state;
    return (
      <div className="calculator">
        <div className="result-screen">
          <p id="total">{results.total}</p>
          <p id="op">{results.operation}</p>
          <p id="next">{results.next || 0}</p>
        </div>
        <div className="button-section">
          {buttons.map((buttonkey) => (
            <Button
              key={buttonkey.value}
              value={buttonkey.value}
              role={buttonkey.type}
              handleChange={this.handleChange}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Calculator;
