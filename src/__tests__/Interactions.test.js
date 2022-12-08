import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';
import Homepage from '../components/Homepage';
import App from '../App';
import NotFound from '../components/NotFound';
import Quotes from '../components/Quotes';

describe('HomePage component is rendererd', () => {
  test('Component is rendererd', () => {
    render(<Homepage />);
    const container = screen.getByText(/Welcome to our page!/);
    expect(container).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<Homepage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Calculator component is rendererd', () => {
  test('Component functions', () => {
    // Arrange
    render(<Calculator />);

    // Act
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));
    const result = screen.getByTestId('total');

    // Assert
    expect(result).toHaveTextContent('15');
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// Routing test

describe('Navbar renders', () => {
  test('should redirect and update history', () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
    );

    fireEvent.click(screen.getByText(/Calculator/));
    expect(history.location.pathname).toEqual('/calculator');
  });

  test('should redirect and update dom', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    fireEvent.click(screen.getByText(/Calculator/));
    expect(screen.getByText(/Let's do some math!/)).toBeInTheDocument();
  });
});

describe('Not-found page is rendered', () => {
  test('Component is rendered', () => {
    render(<NotFound />);
    const container = screen.getByText(/404/);
    expect(container).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<NotFound />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Quotes page is rendered', () => {
  test('Component is rendered', () => {
    render(<Quotes />);
    const container = screen.getByTestId('quotes');
    expect(container).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<Quotes />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
