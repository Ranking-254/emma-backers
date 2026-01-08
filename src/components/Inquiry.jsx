import { useState } from 'react';

const Inquiry= () => {
  const [formData, setFormData] = useState({
    cakeType: 'Wedding Cakes',
    flavor: 'Vanilla Bean',
    date: '',
    message: '',
    notes: ''
  });

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    // Namba yako ya simu (Weka ya kwako hapa na country code bila +)
    const phoneNumber = "254716700151"; 

    // Kutengeneza ujumbe utakaotumwa
    const message = `Hello Emma's Bakery! I'd like to make an inquiry:
    - Occasion: ${formData.cakeType}
    - Flavor: ${formData.flavor}
    - Date: ${formData.date}
    - Message on Cake: ${formData.message}
    - Extra Notes: ${formData.notes}`;

    // Encode ujumbe kwa ajili ya URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Fungua WhatsApp
    window.open(whatsappURL, '_blank');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-white py-20 px-8" id="inquiry">
      <div className="max-w-3xl mx-auto border border-gray-100 p-10 shadow-sm">
        <div className="text-center mb-10">
          <span className="text-bakery-gold uppercase tracking-widest text-xs font-bold">Custom Commission</span>
          <h2 className="text-4xl font-serif italic mt-2">Special Occasion Order</h2>
          <p className="text-gray-500 mt-4 font-light italic">Ask about your specific design.</p>
        </div>

        <form onSubmit={handleWhatsAppSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Cake Category */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Occasion</label>
            <select 
              name="cakeType"
              value={formData.cakeType}
              onChange={handleChange}
              className="border-b border-gray-200 py-2 focus:border-bakery-gold outline-none bg-transparent"
            >
              <option>Wedding Cakes</option>
              <option>Anniversary Cakes</option>
              <option>Graduation Cakes</option>
              <option>Birthday Cakes</option>
              <option>Baptism Cakes</option>
              <option>Ruracio</option>
            </select>
          </div>

          {/* Preferred Date */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold"> Preferred Collection Date</label>
            <input 
              name="date"
              type="date" 
              required
              onChange={handleChange}
              className="border-b border-gray-200 py-2 focus:border-bakery-gold outline-none" 
            />
          </div>

          {/* Flavor Selection */}
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Preferred Flavor</label>
            <div className="flex gap-4 flex-wrap mt-2">
              {['Vanilla Bean', 'Rich Chocolate', 'Red Velvet', 'Lemon Elderflower'].map(flavor => (
                <label key={flavor} className="flex items-center gap-2 text-sm cursor-pointer hover:text-bakery-gold">
                  <input 
                    type="radio" 
                    name="flavor" 
                    value={flavor}
                    checked={formData.flavor === flavor}
                    onChange={handleChange}
                    className="accent-bakery-gold" 
                  /> {flavor}
                </label>
              ))}
            </div>
          </div>

          {/* Cake Message */}
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-[10px] uppercase tracking-widest text-blue-400 font-bold">Prefered Design</label>
            <input 
              name="message"
              type="text" 
              onChange={handleChange}
              placeholder="e.g., Happy 21st Birthday Sarah" 
              className="border-b border-gray-200 py-2 focus:border-bakery-gold outline-none placeholder:italic placeholder:text-gray-300" 
            />
          </div>

          <button 
            type="submit"
            className="md:col-span-2 bg-bakery-charcoal text-white py-4 uppercase tracking-[0.2em] text-xs hover:bg-bakery-gold transition-colors mt-6"
          >
            Submit to whatsapp for futher confirmation
          </button>
        </form>
      </div>
    </section>
  );
};

export default Inquiry