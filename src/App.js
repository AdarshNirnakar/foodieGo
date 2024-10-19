import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import Login from './pages/Login';
import RestaurantMenuPage from './pages/RestaurantMenuPage';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/restaurant/:id" element={<RestaurantMenuPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
