import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./About";
import Profile from "./Profile";
import Home from "./Home" // Note the capital "Profile"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} /> {/* Fixed component reference */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
