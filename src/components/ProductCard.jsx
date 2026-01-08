const ProductCard = ({ product }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 mb-4">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      <div className="flex justify-between items-start mb-1">
        <h3 className="font-serif text-xl text-bakery-charcoal">{product.name}</h3>
        <span className="text-bakery-gold font-medium">KSh {product.price.toLocaleString()}</span>
      </div>
      
      <p className="text-gray-500 text-sm italic font-light leading-relaxed">
        {product.description}
      </p>
      
      <a href="#order-form" className="mt-4 inline-block text-[10px] uppercase tracking-[0.2em] border-b border-bakery-charcoal pb-1 hover:text-bakery-gold hover:border-bakery-gold transition-all">
  order now
</a>
    </div>
  );
};

export default ProductCard;