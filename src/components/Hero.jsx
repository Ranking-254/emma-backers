import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1920&q=80" 
          alt="Fresh baked bread" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <span className="text-bakery-gold uppercase tracking-[0.3em] text-sm font-medium mb-4 block">
          Est. 2024 — Embu
        </span>
        <h1 className="text-5xl md:text-7xl font-serif text-white italic mb-6">
          The Art of Slow Baking
        </h1>
        <p className="text-white/90 max-w-lg mx-auto mb-8 font-light leading-relaxed">
          At Emma’s, we believe time is our most important ingredient. 
          And every customer matters to us.
        </p>
        
        <div className="flex gap-4 justify-center">
          {/* Link kwenda kwenye Menu (Home Page) */}
          <Link 
            to="/menu" 
            className="bg-bakery-gold text-white px-8 py-4 text-xs uppercase tracking-widest hover:bg-white hover:text-bakery-charcoal transition-all duration-300"
          >
            View Menu
          </Link>
          
          {/* Link kwenda kwenye About Page */}
          <Link 
            to="/about" 
            className="border border-white text-white px-8 py-4 text-xs uppercase tracking-widest hover:bg-white hover:text-bakery-charcoal transition-all duration-300"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;