import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <Route to="/" component={HomeScreen} exact />
      <Footer />
    </Router>
  );
};

export default App;
