import Hero from '../components/Hero';
import Features from '../components/Features';
import OrderForm from '../components/OrderForm';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      {/* Hapa Home page itakuwa na maelezo na fomu ya kuanza oda */}
      <OrderForm />
    </>
  );
};

export default Home;