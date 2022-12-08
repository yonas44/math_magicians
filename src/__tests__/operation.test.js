import calculate from '../logic/calculate';
import operate from '../logic/operate';

describe('Operations are working', () => {
  test('operate returns values', () => {
    // Arrange
    const first = 6;
    const second = 4;
    const operator = 'x';
    // Act
    const result = operate(first, second, operator);
    // Assert
    expect(result).toBe('24');
  });

  test('calculate returns values', () => {
    // Arrange
    let results = {};
    const setResults = (result) => {
      results = result;
    };
    const input = '8';
    // Act
    const newResult = calculate(results, input);
    setResults(newResult);
    // Assert
    expect(JSON.stringify(results)).toBe('{"next":"8","total":null}');
  });
});
