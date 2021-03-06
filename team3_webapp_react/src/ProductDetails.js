import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import ProductDetails from "./components/ProductDetail";

function ProductDetailsShow() {
  return (
    <div>
    <Header />
    <ProductDetails/>
    <Footer />
    </div>


  );
}
export default ProductDetailsShow;
