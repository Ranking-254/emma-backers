import { useState } from 'react';
import { Plus, Minus } from 'lucide-react'; // Tutatumia hizi icons kwa + na -

const FAQ = () => {
  // Tunatumia index kufuatilia swali lililofunguliwa. null inamaanisha yote yamefungwa.
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    { q: "How far in advance should I order a wedding cake?", a: "We recommend at least 3 weeks notice for custom wedding bakes to ensure we have availability for your date." },
    { q: "Do you offer gluten-free options?", a: "Yes, we have a selection of GF pastries and breads available daily. Please ask our staff for the daily gluten-free special." },
    { q: "Where can I pick up my order?", a: "Pickup is at our Westlands branch, located at Artisan Lane. We are open Monday through Sunday, 8 AM to 6 PM." },
    { q: "Do you offer delivery services?", a: "Yes, we deliver within Nairobi and its environs. Delivery fees depend on your specific location." }
  ];

  const toggleFAQ = (index) => {
    // Ukibonyeza swali ambalo tayari liko wazi, linafunga (set to null)
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-bakery-beige px-8" id="faq">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-bakery-gold uppercase tracking-[0.3em] text-[10px] font-bold block mb-2">Information</span>
          <h2 className="text-4xl font-serif italic text-bakery-charcoal">Common Inquiries</h2>
        </div>

        <div className="space-y-4">
          {questions.map((item, i) => (
            <div key={i} className="border-b border-gray-200">
              <button 
                onClick={() => toggleFAQ(i)}
                className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
              >
                <h4 className={`text-sm uppercase tracking-widest transition-colors duration-300 ${openIndex === i ? 'text-bakery-gold font-bold' : 'text-bakery-charcoal group-hover:text-bakery-gold'}`}>
                  {item.q}
                </h4>
                <div className="text-bakery-gold">
                  {openIndex === i ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
                </div>
              </button>
              
              {/* Answer Area - Hii inafunguka kwa kuteleza (transition) */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-40 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-500 italic font-light text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;