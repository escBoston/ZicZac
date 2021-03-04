import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'

function Products(props) {
  const category = props.location.category
  const [products, setProducts] = useState([]);
  console.log(category)

  let opts = {
    'category': category
  }
  fetch('http://localhost:5000/api/category', {
    method: 'post',
    body: JSON.stringify(opts)
  }).then(r => r.json())
  .then(token => {
    setProducts(token.products)
  })
  console.log(products)

  return (
    <div>
    <Header />
    <div className="category">
    <h4>Category: {category}</h4>
    {products}
    </div>
    <Footer />
    </div>


  );
}

export default Products;
