import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Cards from "./components/ProductList";

function Products(props) {
  const category = props.location.category
  const [products, setProducts] = useState([]);

  let opts = {
    'category': category
  }
  useEffect(() => {
  fetch('http://localhost:5000/api/category', {
    method: 'post',
    body: JSON.stringify(opts)
  }).then(r => r.json())
  .then(token => {
    setProducts(token.products)
  })
}, []);

  return (
    <div>
    <Header />
    <div className="category">
    <h4>Category: {category}</h4>
    {products}
    </div>
    <p>List of products in form of cards</p>
    <Cards prodsrc={products} catsrc={category}/>
    <Footer />
    </div>


  );
}

export default Products;
