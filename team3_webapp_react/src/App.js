import { Transition } from 'react-transition-group';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Redirect, BrowserRouter, Switch, Route , HashRouter} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Account from './Account';
import Products from './Products';
import Home from './Home';
import Signin from './Signin';
import Signup from './Signup';
import ProductDetails from "./components/ProductDetail";
import UploadProduct from "./Sell";
import Search from './components/Search';
import SendMessage from './components/SendMessage'
import Messages from './components/Messages'
import ContactUs from './ContactUs'



function App() {
  return (
    <div className="App">

<BrowserRouter>
    <Switch>
    <Route exact path="/">
    <Redirect to="/Home" component={Home}/></Route>
    <Route path="/Home" component={Home} />
    <Route path="/Products" component={Products} />
    <Route path="/Signin" component={Signin} />
    <Route path="/Signup" component={Signup} />
    <Route path="/ProductDetails" component={ProductDetails} />
    <Route path="/Sell" component={UploadProduct} />
    <Route path="/Search" component={Search} />
    <Route path="/SendMessage" component={SendMessage} />
    <Route path="/Messages" component={Messages} />
    <Route path="/ContactUs" component={ContactUs}/>

    </Switch>
</BrowserRouter>
    </div>


  );
}

export default App;
