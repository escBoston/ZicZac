import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import UploadProductPage from "./components/UploadProduct";

function UploadProduct(props) {
  return (
    <div>
    <Header />
    <UploadProductPage/>
    <Footer />
    </div>


  );
}
export default UploadProduct;
