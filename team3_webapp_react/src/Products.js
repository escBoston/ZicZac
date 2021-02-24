import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'

function Products() {
  return (
    <div>
    <Header />

    <Footer />
    </div>


  );
}

export default Products;
