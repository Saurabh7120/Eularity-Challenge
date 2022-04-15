import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route  path="/about" element={<About/>}/>
          <Route  path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
