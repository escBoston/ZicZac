import React, { useEffect, useState } from 'react'
import Dropzone from "react-dropzone";
import {Container, Form, Nav, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
import UserProfile from "./UserProfile";
import CardItem from './Card';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link, useHistory, useLocation } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'


function ProductDetails(props) {
    const history = useHistory();
    const location = useLocation();
    const title = props.location.title
    const [item, setItem] = useState();
    var price, description, seller, img = ''

    let opts = {
      'title': title
    }

    useEffect(() => {
    fetch('http://localhost:5000/api/get_item', {
      method: 'post',
      body: JSON.stringify(opts)
    }).then(r => r.json())
    .then(token => {
      setItem(token.item[0])
    })
    }, []);

    console.log(item)
    if (typeof item != 'undefined') {
      price = parseFloat(item.price).toFixed(2)
      description = item.description
      seller = item.seller
      img = item.photo_filepath
    }

    return (
      <div>
      <Header />
      <Container>
      <h2 style={{marginLeft: 20, position:"relative"}}>{title}</h2>
      <Row>
      <Col xs={6}>
      <CardItem
        src={img}
        text=''
        label={price}
        path='/services'
      />
      </Col>
      <Col xs={6}>
      <h3>Description</h3><br/>
      <p>{description}</p>
      </Col>
      </Row>
      <br/>
      <br/>
      <br/>
      <h3 style={{marginLeft: 30, position:"relative"}}>Sold by</h3>
      {seller}
      <UserProfile />
      </Container>
      <Footer />
      </div>

    )
}

export default ProductDetails
