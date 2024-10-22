import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import RestaurantMenuPage from './pages/RestaurantMenuPage';
import PageNotFound from './pages/Pagenotfound';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />}>
            <Route path="/login/success" element={<Navigate to="/" replace />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/restaurant/:id" element={<RestaurantMenuPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
