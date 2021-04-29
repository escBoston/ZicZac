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
import SendMessage from './components/SendMessage'
import Messages from './components/Messages'
import Account from './Account';
import Products from './Products';
import Sell from './Sell';

function Home(props) {
  return (
    <div className="App">
    <Header />

    <Section1 />
    <Section2 />
    <Footer />

<BrowserRouter>
    <Switch>
    <Route path="/ProductDetails" component={ProductDetails} />
    <Route path="/Account" component={Account} />
    <Route path="/Sell" component={Sell} />
    <Route path="/SendMessage" component={SendMessage} />
    <Route path="/Messages" component={Messages} />
    </Switch>
</BrowserRouter>
    </div>


  );
}

export default Home;
