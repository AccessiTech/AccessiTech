import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import '../sass/global.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:lang" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/:lang/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
