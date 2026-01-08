import { useState } from 'react';
import { products, categories } from '../data/Products';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Logic: If 'All' is selected, show everything. Otherwise, filter by category.
  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <div className="text-center mb-16">
        <span className="text-bakery-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-2 block">
          Emma's Collection
        </span>
        <h2 className="text-4xl font-serif italic mb-10 text-bakery-charcoal">Fresh from the Oven</h2>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 text-[9px] md:text-[10px] uppercase tracking-widest">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 border transition-all duration-300 ${
                activeCategory === cat 
                ? 'bg-bakery-charcoal text-white border-bakery-charcoal shadow-lg' 
                : 'border-gray-200 text-gray-400 hover:border-bakery-gold hover:text-bakery-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* The Display Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 italic text-gray-400">
          No items found in this category today.
        </div>
      )}
    </section>
  );
};

export default ProductGrid;