import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import View from './pages/View';
import Premium from './pages/Premium';
import AllProduct from './pages/AllProduct';
import Grabitracks from './pages/Grabitracks';
import Boardgame from './pages/Boardgame';
import Cube from './pages/Cube';
import CollectionCard from './pages/CollectionCard';
import Puzzle from './pages/Puzzle';
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/View" element={<View />} />
          <Route path="/pages/Premium" element={<Premium />} />
          <Route path="/pages/AllProduct" element={<AllProduct />} />
          <Route path="/pages/Grabitracks" element={<Grabitracks />} />
          <Route path="/pages/Boardgame" element={<Boardgame />} />
          <Route path="/pages/Cube" element={<Cube />} />
          <Route path="/pages/CollectionCard" element={<CollectionCard />} />
          <Route path="/pages/Puzzle" element={<Puzzle />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
