import { Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Quotes from './components/Quotes';

function App() {
  return (
    <div className="App-wrapper">
      <div className="App">
        <Navbar />
        <Routes>
          <Route element={<Calculator />} path="/calculator" />
          <Route element={<Homepage />} exact path="/" />
          <Route element={<Quotes />} exact path="/quotes" />
          <Route element={<NotFound />} exact path="*" />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
