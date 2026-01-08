import { Car } from 'lucide-react';
import { Link } from 'react-router-dom';
import Features from '../components/Features';

const Services = () => (
  <div className="pt-32 min-h-screen bg-[#faf9f6]">
    <div className="text-center mb-12">
      <h1 className="font-serif text-5xl italic">Our Services</h1>
      <p className="text-gray-400 mt-4 font-light tracking-wide">Beyond the oven, we offer professional partnerships and education.</p>
    </div>

    <Features /> 

    <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-8 pb-12">
      <div className="bg-white p-10 border border-gray-100 transition-hover hover:shadow-xl duration-500">
        <h3 className="font-serif text-2xl mb-4 italic">Wholesale Supply</h3>
        <p className="text-gray-500 leading-relaxed">Partner with us to bring premium sourdough and artisanal pastries to your cafe or restaurant across Nairobi.</p>
      </div>
      <div className="bg-white p-10 border border-gray-100 transition-hover hover:shadow-xl duration-500">
        <h3 className="font-serif text-2xl mb-4 italic">Baking Workshops</h3>
        <p className="text-gray-500 leading-relaxed">Join our masterclasses to learn the art of fermentation and the secrets behind the perfect golden crust.</p>
      </div>
    </div>

    {/* Cross-Promotion Section: Emma N. Driving School */}
    <div className="max-w-7xl mx-auto px-8 pb-24">
      <div className="bg-bakery-charcoal text-white p-12 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative group">
        {/* Background glow effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-driving-blue/10 rounded-full -mr-32 -mt-32 blur-3xl transition-opacity group-hover:opacity-50"></div>
        
        <div className="max-w-xl relative z-10">
          <div className="flex items-center gap-3 text-bakery-gold mb-6">
            <Car size={28} />
            <span className="uppercase tracking-[0.3em] text-[10px] font-bold">Sister Enterprise</span>
          </div>
          <h2 className="font-serif text-4xl mb-4 italic">Emma N. Driving School</h2>
          <p className="text-gray-400 leading-relaxed">
            Looking to master the road? Visit our NTSA-certified driving school in Runyenjes for professional, 
            patient, and affordable driving instruction tailored to your schedule.
          </p>
        </div>

        <div className="relative z-10">
          <a 
            href="https://emma-driving-school.netlify.app" /* You will replace this with the real link after deployment */
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-bakery-charcoal px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-bakery-gold hover:text-white transition-all duration-300 shadow-2xl block text-center"
          >
            Visit Driving School
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Services;