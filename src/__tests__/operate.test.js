import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/button/buttonComponent';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

test('buttons fired', () => {
  render(<Button />);
});
