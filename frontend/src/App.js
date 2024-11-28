import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookDetailsPage from './pages/BookDetailsPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/books/:id" element={<BookDetailsPage />} /> */}
      <Route path="/books/:id" element={<BookDetailsPage />} />

    </Routes>
    <Footer />
  </>
);

export default App;
