import React from 'react';
import './assets/scss/App.scss';
import Navbar from './components/Navbar';
import Categories from './components/Categories/Categories';
import { Routes, Route } from 'react-router-dom';
import BookContainer from './components/Books/BookContainer';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookContainer />} />
        <Route path="/categories" element={<Categories />} />

      </Routes>
    </>
  );
}

export default App;
