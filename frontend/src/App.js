import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Cart from './screens/Cart';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container className="py-3">
          <Route path="/" component={HomeScreen} exact />
          <Route path="/products/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={Cart} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
