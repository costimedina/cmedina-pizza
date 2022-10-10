import Header from '../components/Header';
import Footer from '../components/Footer';
import Grid from '../components/Grid';
import { useContext } from 'react';
import PizzaContext from '../context/PizzaContext';


function Home() {
  const { pizzaData } = useContext(PizzaContext);

  return (
    <div>
      <Header />
      <Grid data={pizzaData} />
      <Footer />
    </div>
  );
}

export default Home;