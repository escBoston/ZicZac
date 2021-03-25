import React, { useEffect, useState } from "react";
import {Container, Form, Nav, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Header'
import Footer from './Footer'
import Cards from './ProductList';
import ProductDetails from './ProductDetail';
import CardItem from './Card';

function Search(props) {
  const [items, setItems] = useState([]);
  const query = props.location.query

  let opts = {
    'query': query
  }
  useEffect(() => {
  fetch('http://localhost:5000/api/search', {
    method: 'post',
    body: JSON.stringify(opts)
  }).then(r => r.json())
  .then(token => {
    setItems(token.items)
  })
  }, []);

  var elements = [];
  for (var i=0; i<items.length; i++) {
    elements.push(
      <CardItem
      src={items[i].photo_filepath}
      text={items[i].title}
      label={parseFloat(items[i].price).toFixed(2)}
      path={`ProductDetails/${items[i].title}`}
      />
    );
  }

  return (
    <div>
    <Header />
    <div>
    <Col>
    {elements}
    </Col>
    </div>
    <Footer />
    </div>
  );
}
export default Search;
