import imge from '../assets/im.jpg';
import image from '../assets/img7.jpg';
import img1 from '../assets/img8.jpg';
import img2 from '../assets/img6.jpg';
import img3 from '../assets/img5.jpg';
export const categories = [
  "All",
  "Pastry",
  "Anniversary Cakes",
  "Graduation Cakes",
  "Birthday Cakes",
  "Wedding Cakes",
  "Baptism Cakes"
];

export const products = [
  // --- PASTRY ---
  {
    id: 2,
    name: "Almond Croissant",
    price: 350,
    category: "Pastry",
    description: "Flaky, buttery layers filled with rich almond cream and topped with toasted slivers.",
    image: img1
  },

  // --- WEDDING CAKES ---
  {
    id: 101,
    name: "Classic Tiered Wedding Cake",
    price: 15000,
    category: "Wedding Cakes",
    description: "Elegant vanilla bean sponge with Swiss meringue buttercream and fresh floral accents.",
    image:imge
  },
  {
    id: 103,
    name: "Rustic Naked Wedding Cake",
    price: 12500,
    category: "Wedding Cakes",
    description: "Minimalist aesthetic with berry compote filling and light dusting of powdered sugar.",
    image: image
  },

  // --- GRADUATION CAKES ---
  {
    id: 102,
    name: "Gold Leaf Graduation Cake",
    price: 4500,
    category: "Graduation Cakes",
    description: "Celebrate success with our chocolate ganache specialty and custom topper.",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=800"
  },
  {
    id: 104,
    name: "Success Marble Cake",
    price: 4200,
    category: "Graduation Cakes",
    description: "Swirled chocolate and vanilla layers with a modern blue and gold finish.",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=800"
  },

  // --- BIRTHDAY CAKES ---
  {
    id: 105,
    name: "Funfetti Celebration",
    price: 3500,
    category: "Birthday Cakes",
    description: "Colorful sprinkle-infused sponge with creamy marshmallow frosting.",
    image: img2
  },
  {
    id: 106,
    name: "Red Velvet Dream",
    price: 3800,
    category: "Birthday Cakes",
    description: "Velvety smooth cocoa sponge with our signature tangy cream cheese frosting.",
    image: imge
  },

  // --- ANNIVERSARY CAKES ---
  {
    id: 107,
    name: "Midnight Chocolate Truffle",
    price: 4800,
    category: "Anniversary Cakes",
    description: "Decadent dark chocolate layers for the ultimate romantic celebration.",
    image: img3
  },

  // --- BAPTISM CAKES ---
  {
    id: 108,
    name: "Angel White Pearl Cake",
    price: 4000,
    category: "Baptism Cakes",
    description: "Soft lemon sponge with white chocolate pearls and a delicate satin finish.",
    image: img3
  }
];