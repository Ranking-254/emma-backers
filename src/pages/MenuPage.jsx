import ProductGrid from '../components/ProductGrid';

const MenuPage = () => {
  return (
    <div className="pt-32 min-h-screen bg-bakery-beige">
      <div className="text-center mb-12">
        <span className="text-bakery-gold uppercase tracking-[0.3em] text-[10px] font-bold block mb-2">
          Full Selection
        </span>
        <h1 className="font-serif text-5xl italic text-bakery-charcoal">Our Menu</h1>
        <p className="text-gray-500 mt-4 max-w-lg mx-auto font-light">
          Explore our daily bakes, from crusty sourdough to decadent celebration cakes.
        </p>
      </div>

      {/* Re-using the ProductGrid component */}
      <ProductGrid />

      <div className="bg-bakery-charcoal text-white py-16 text-center mt-20">
        <h2 className="font-serif text-3xl italic mb-6">Don't see what you're looking for?</h2>
        <p className="mb-8 opacity-80">We take custom orders for any special occasion.</p>
        <a 
          href="/inquiry" 
          className="border border-white px-8 py-3 uppercase tracking-widest text-xs hover:bg-white hover:text-bakery-charcoal transition-all"
        >
          Inquire Now
        </a>
      </div>
    </div>
  );
};

export default MenuPage;