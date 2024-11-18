// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import DarkModeToggle from './components/DarkModeToggle';
import Tutorials from './components/Tutorials';
import TutorialDetail from './components/TutorialDetail';
import Navbar from './components/Navbar';
import Home from './components/Home';
import WhatsAppButton from './components/WhatsAppButton';
import Profile from './components/Profile';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
    <Router>
      <Navbar />
      <Home />
  
      <WhatsAppButton/>
      {/* Konten Utama */}
      <main className="p-6 flex justify-center">
        <Profile />
      </main>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
      <Testimonial/>
      <Routes>
        <Route path="/" element={<Tutorials />} />
        <Route path="/tutorial/:id" element={<TutorialDetail />} />
      </Routes>
      <Contact />
    
      <Footer />
    </Router>
    </div>
  );
}

export default App;
