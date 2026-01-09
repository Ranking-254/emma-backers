const Contact = () => (
  <div className="pt-32 px-8 max-w-4xl mx-auto min-h-screen text-center">
    <h1 className="font-serif text-5xl italic mb-12">Get in Touch</h1>
    <div className="grid md:grid-cols-2 gap-12 text-left">
      <div>
        <h3 className="font-bold uppercase tracking-widest text-xs mb-4">Location</h3>
        <p className="text-gray-600 mb-8">Makutano, Kyeni<br/>Embu, Kenya</p>
        <h3 className="font-bold uppercase tracking-widest text-xs mb-4">Inquiries</h3>
        <p className="text-gray-600">hello@emmasbakery.co.ke<br/>+254 700 000 000</p>
      </div>
      <div className="bg-bakery-beige p-8">
        <h3 className="font-serif text-xl mb-4 italic">Operating Hours</h3>
        <p className="text-sm text-gray-600">Mon - Fri: 7am - 6pm</p>
        <p className="text-sm text-gray-600">Sat - Sun: 8am - 4pm</p>
      </div>
    </div>
  </div>
);
export default Contact;