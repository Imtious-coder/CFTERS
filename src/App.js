import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './Layout/Layout/Layout.jsx';
import Home from './Pages/Home';
import ComingSoon from './components/ComingSoon.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={ <Home />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
