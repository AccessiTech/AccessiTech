import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home/Home';
import '../sass/global.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:lang" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
