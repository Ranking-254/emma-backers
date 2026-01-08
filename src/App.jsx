import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// Import Pages
import Home from './pages/Home'; // Hamisha Hero na ProductGrid hapa
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import MenuPage from './pages/MenuPage';
import Inquiry from './components/Inquiry';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-bakery-beige flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
             <Route path="/inquiry" element={<Inquiry />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;