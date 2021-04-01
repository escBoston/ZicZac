import React, { useEffect, useState } from "react";
import CardItem from './Card';
import {Container, Form, Nav, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
import ProductDetails from './ProductDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Cards(props) {
  const products = props.prodsrc
  //const cat = props.catsrc
  var titles = ['', '', '', ''];
  var prices = ['', '', '', ''];
  var paths = ['', '', '', ''];
  var imgs = ['', '', '', ''];

  if (products.length>0) {
    for (var i = 0; i<products.length; i++) {
      titles[i] = products[i].title
      paths[i] = `ProductDetails/${products[i].title}`
      prices[i] = parseFloat(products[i].price).toFixed(2);
      imgs[i] = products[i].photo
    }
  }

  return (
    <div className='cards'>
      <h1>PRODUCTS</h1>
      <Row>
            <CardItem
              src={imgs[0]}
              text={titles[0]}
              label={prices[0]}
              path={paths[0]}
            />
            <CardItem
              src={imgs[1]}
              text={titles[1]}
              label={prices[1]}
              path={paths[1]}
            />
            <CardItem
              src={imgs[2]}
              text={titles[2]}
              label={prices[2]}
              path={paths[2]}
            />

            <CardItem
              src={imgs[3]}
              text={titles[3]}
              label={prices[3]}
              path={paths[3]}
            />
  </Row>
  </div>
  );
}

export default Cards;
