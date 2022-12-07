import { Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Quotes from './components/Quotes';

function App() {
  return (
    <div className="App-wrapper">
      <div className="App">
        <Routes>
          <Route element={<Navbar />} path="/math_magicians/">
            <Route element={<Calculator />} path="/math_magicians/calculator" />
            <Route element={<Homepage />} exact path="/math_magicians/" />
            <Route element={<Quotes />} exact path="/math_magicians/quotes" />
          </Route>
          <Route element={<NotFound />} exact path="*" />
        </Routes>
      </div>
    </div>
  );
}

export default App;
