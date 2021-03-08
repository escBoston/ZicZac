import React, { useEffect, useState } from "react";
import CardItem from './Card';
import {Container, Form, Nav, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';


function Cards(props) {
  const products = props.prodsrc
  const cat = props.catsrc
  console.log(products)

  var prod0title, prod0price, prod1title, prod1price = ''
  if (products.length>0) {
    prod0title = JSON.parse(products[0]).title
    prod0price = parseFloat(JSON.parse(products[0]).price).toFixed(2);
    prod1title = JSON.parse(products[1]).title
    prod1price = parseFloat(JSON.parse(products[1]).price).toFixed(2);
  }

  return (
    <div className='cards'>
      <h1>PRODUCTS</h1>
      <Row>
            <CardItem
              src=''
              text={prod0title}
              label={prod0price}
              path='/ProductDetails'
            />
            <CardItem
              src=''
              text={prod1title}
              label={prod1price}
              path='/ProductDetails'
            />
            <CardItem
              src=''
              text=''
              label={cat}
              path='/ProductDetails'
            />

            <CardItem
              src=''
              text=''
              label={cat}
              path='/ProductDetails'
            />
  </Row>
  <Row style={{marginTop: 20}}>
            <CardItem
              src=''
              text=''
              label={cat}
              path='/ProductDetails'
            />
            <CardItem
              src=''
              text=''
              label={cat}
              path='/ProductDetails'
            />
            <CardItem
              src=''
              text=''
              label={cat}
              path='/ProductDetails'
            />
            <CardItem
              src=''
              text=''
              label={cat}
              path='/ProductDetails'
            />
</Row>
    </div>
  );
}

export default Cards;
