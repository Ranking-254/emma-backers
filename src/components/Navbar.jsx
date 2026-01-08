import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: 'Pastries', href: '/' }, 
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Other Services', href: '/services' },
  ];

  // Logic to handle smooth scrolling to the order form
  const handleOrderClick = (e) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu if open

    if (location.pathname !== '/') {
      // If the user is on a different page, go home first
      navigate('/');
      // Wait for the page to load, then scroll
      setTimeout(() => {
        const element = document.getElementById('order-form');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // If already home, just scroll smoothly
      const element = document.getElementById('order-form');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-[#faf9f6]/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <h1 className="font-serif text-2xl tracking-tighter text-bakery-charcoal cursor-pointer">
            EMMA’S <span className="text-bakery-gold text-xs block font-sans tracking-[0.3em] uppercase -mt-1">Bakery</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className="text-[11px] uppercase tracking-[0.2em] text-gray-600 hover:text-bakery-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Fixed Order Button */}
          <a 
            href="#order-form" 
            onClick={handleOrderClick}
            className="bg-bakery-gold text-white px-6 py-3 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-bakery-charcoal transition-all shadow-lg shadow-gold/20"
          >
            Order Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-bakery-charcoal">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 py-8 px-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-[11px] uppercase tracking-[0.2em] text-gray-600 border-b border-gray-50 pb-2"
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="#order-form" 
            onClick={handleOrderClick}
            className="bg-bakery-gold text-white text-center py-4 text-[10px] font-bold uppercase tracking-widest rounded-xl"
          >
            Order Your Cake
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;