import { Wheat, Truck, Clock, Award } from 'lucide-react';

const Features = () => {
  const points = [
    {
      icon: <Wheat className="w-8 h-8 stroke-1" />,
      title: "Artisanal Heritage",
      desc: "We honor traditional slow-fermentation methods that have been passed down for generations."
    },
    {
      icon: <Clock className="w-8 h-8 stroke-1" />,
      title: "Daily Fresh Bakes",
      desc: "Our ovens are fired up at 3:00 AM every single day to ensure you get bread at its peak freshness."
    },
    {
      icon: <Truck className="w-8 h-8 stroke-1" />,
      title: "Reliable Delivery",
      desc: "From delicate wedding cakes to daily loaves, we deliver across Nairobi with the utmost care."
    },
    {
      icon: <Award className="w-8 h-8 stroke-1" />,
      title: "Premium Quality",
      desc: "We use organic stone-ground flour and locally sourced fruits for the most authentic taste."
    }
  ];

  return (
    <section className="py-24 bg-white px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="text-bakery-gold uppercase tracking-[0.4em] text-[10px] font-bold block mb-4">
            The Emma's Standard
          </span>
          <h2 className="text-4xl font-serif italic text-bakery-charcoal">Why Our Bakery Stands Apart</h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {points.map((p, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              {/* Icon Circle */}
              <div className="mb-6 p-4 rounded-full bg-bakery-beige text-bakery-gold group-hover:bg-bakery-gold group-hover:text-white transition-all duration-500">
                {p.icon}
              </div>
              
              <h3 className="font-serif text-xl mb-3 text-bakery-charcoal italic">{p.title}</h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;