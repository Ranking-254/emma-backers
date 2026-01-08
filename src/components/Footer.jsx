import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bakery-charcoal text-white pt-20 pb-10" id="contact">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          
          {/* Brand Column */}
          <div className="flex flex-col">
            <h3 className="font-serif text-2xl mb-4 tracking-tighter">
              EMMA’S <span className="text-bakery-gold block text-xs font-sans tracking-[0.3em] uppercase">Bakery</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Crafting professional cakes and pastries in the heart of Embu. Quality you can taste in every Bite.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" className="text-gray-400 hover:text-bakery-gold transition-colors">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="https://facebook.com" target="_blank" className="text-gray-400 hover:text-bakery-gold transition-colors">
                <Facebook size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Quick Links - Sasa zinaenda kwenye Pages zetu */}
          <div>
            <h4 className="text-bakery-gold uppercase tracking-widest text-[10px] font-bold mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-bakery-gold transition-colors italic">Home</Link></li>
              <li><Link to="/menu" className="hover:text-bakery-gold transition-colors italic">Our Menu</Link></li>
              <li><Link to="/services" className="hover:text-bakery-gold transition-colors italic">Services</Link></li>
              <li><Link to="/about" className="hover:text-bakery-gold transition-colors italic">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-bakery-gold transition-colors italic">Contact Us</Link></li>
            </ul>
          </div>

          {/* Location & Professional Contact */}
          <div>
            <h4 className="text-bakery-gold uppercase tracking-widest text-[10px] font-bold mb-8">Contact Information</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 text-sm text-gray-300">
                <MapPin size={18} className="text-bakery-gold flex-shrink-0" />
                <p>123 Artisan Lane, Westlands<br/>Nairobi, Kenya</p>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-300">
                <Phone size={18} className="text-bakery-gold flex-shrink-0" />
                <p>+254 700 000 000</p>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-300">
                <Mail size={18} className="text-bakery-gold flex-shrink-0" />
                <p>hello@emmasbakery.co.ke</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-gray-500">
          <p>© 2026 Emma's Bakery. Crafted with care in Nairobi.</p>
          <div className="flex gap-8">
            <Link to="/about" className="hover:text-white">Privacy Policy</Link>
            <Link to="/about" className="hover:text-white">Terms of Service</Link>
            
          </div>
        </div>
        <div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-[8px] uppercase tracking-[0.4em] opacity-40 text-center md:text-left">
      built by<a href="https://pattin-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">Pattin</a> 
       </div>
      </div>
    </footer>
  );
};

export default Footer;