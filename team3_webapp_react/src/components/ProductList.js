import React, { useEffect, useState } from "react";
import CardItem from './Card';
import {Container, Form, Nav, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';


function Cards(props) {
  const products = props.prodsrc
  //const cat = props.catsrc
  //console.log(products)
  var prod0title, prod0price, prod1title, prod1price, prod2title, prod2price, prod3title, prod3price = ''
  if (products.length>0) {
    prod0title = products[0].title
    prod1title = products[1].title
    prod2title = products[2].title
    prod3title = products[3].title

    prod0price = parseFloat(products[0].price).toFixed(2);
    prod1price = parseFloat(products[1].price).toFixed(2);
    prod2price = parseFloat(products[2].price).toFixed(2);
    prod3price = parseFloat(products[3].price).toFixed(2);

    // prod0title = JSON.parse(products[0]).title
    // prod0price = parseFloat(JSON.parse(products[0]).price).toFixed(2);
    // prod1title = JSON.parse(products[1]).title
    // prod1price = parseFloat(JSON.parse(products[1]).price).toFixed(2);
    // prod2title = JSON.parse(products[2]).title
    // prod2price = parseFloat(JSON.parse(products[2]).price).toFixed(2);
    // prod3title = JSON.parse(products[3]).title
    // prod3price = parseFloat(JSON.parse(products[3]).price).toFixed(2);
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
              text={prod2title}
              label={prod2price}
              path='/ProductDetails'
            />

            <CardItem
              src=''
              text={prod3title}
              label={prod3price}
              path='/ProductDetails'
            />
  </Row>
  </div>
//   <Row style={{marginTop: 20}}>
//             <CardItem
//               src=''
//               text=''
//               label={cat}
//               path='/ProductDetails'
//             />
//             <CardItem
//               src=''
//               text=''
//               label={cat}
//               path='/ProductDetails'
//             />
//             <CardItem
//               src=''
//               text=''
//               label={cat}
//               path='/ProductDetails'
//             />
//             <CardItem
//               src=''
//               text=''
//               label={cat}
//               path='/ProductDetails'
//             />
// </Row>
//    </div>
  );
}

export default Cards;
