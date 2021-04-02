import { Transition } from 'react-transition-group';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route , HashRouter} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import ProductDetails from './components/ProductDetail'
import UploadProduct from './components/UploadProduct'
import Account from './Account';
import Products from './Products';
import Deals from './Deals';
import Sell from './Sell';

function Home(props) {
  return (
    <div className="App">
    <Header />

    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Footer />

<BrowserRouter>
    <Switch>
    <Route path="/Account" component={Account} />
    <Route path="/Deals" component={Deals} />
    <Route path="/Products" component={Products} />
    <Route path="/ProductDetails" component={ProductDetails} />
    <Route path="/Account" component={Account} />
    <Route path="/Sell" component={Sell} />
    </Switch>
</BrowserRouter>
    </div>


  );
}

export default Home;
